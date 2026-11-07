"use client";

import React, { useState } from "react";
import {
  Bug,
  Sparkles,
  Trophy,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  RotateCcw,
  Award,
} from "lucide-react";
import { playClick, playSuccess } from "@/lib/sound";
import { triggerGoldConfetti } from "@/lib/confetti";

interface CodeLine {
  lineNum: number;
  code: string;
  isBug: boolean;
  explanation?: string;
}

const CODE_LINES: CodeLine[] = [
  { lineNum: 1, code: "@Service", isBug: false },
  { lineNum: 2, code: "public class FundTransferService {", isBug: false },
  { lineNum: 3, code: "    @Autowired private AccountRepository accountRepo;", isBug: false },
  { lineNum: 4, code: "", isBug: false },
  { lineNum: 5, code: "    // 🎯 Challenge : Cliquez sur la ligne contenant la faille critique !", isBug: false },
  {
    lineNum: 6,
    code: "    @Transactional",
    isBug: true,
    explanation:
      "🎯 BRAVO ! Par défaut, @Transactional dans Spring ne rollback QUE sur les RuntimeException. Pour intercepter les checked Exception, il faut impérativement spécifier: @Transactional(rollbackFor = Exception.class) !",
  },
  {
    lineNum: 7,
    code: "    public void transfer(Long fromId, Long toId, BigDecimal amount) throws Exception {",
    isBug: false,
  },
  {
    lineNum: 8,
    code: "        Account from = accountRepo.findById(fromId).orElseThrow();",
    isBug: false,
  },
  {
    lineNum: 9,
    code: "        Account to = accountRepo.findById(toId).orElseThrow();",
    isBug: false,
  },
  {
    lineNum: 10,
    code: "        from.debit(amount);",
    isBug: false,
  },
  {
    lineNum: 11,
    code: "        to.credit(amount);",
    isBug: false,
  },
  {
    lineNum: 12,
    code: "        if (amount.compareTo(BigDecimal.ZERO) <= 0) {",
    isBug: false,
  },
  {
    lineNum: 13,
    code: "            throw new Exception(\"Montant invalide\"); // ⚠️ Checked Exception!",
    isBug: true,
    explanation:
      "🎯 EXACT ! Lancer une checked 'Exception' sans rollbackFor = Exception.class sur @Transactional fait que la transaction est commitée quand même en base de données !",
  },
  {
    lineNum: 14,
    code: "        }",
    isBug: false,
  },
  {
    lineNum: 15,
    code: "        accountRepo.save(from);",
    isBug: false,
  },
  {
    lineNum: 16,
    code: "        accountRepo.save(to);",
    isBug: false,
  },
  { lineNum: 17, code: "    }", isBug: false },
  { lineNum: 18, code: "}", isBug: false },
];

export default function BugHuntGame() {
  const [selectedLine, setSelectedLine] = useState<number | null>(null);
  const [hasWon, setHasWon] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleLineClick = (line: CodeLine) => {
    playClick();
    setSelectedLine(line.lineNum);
    setAttempts((prev) => prev + 1);

    if (line.isBug) {
      setHasWon(true);
      playSuccess();
      triggerGoldConfetti();
    }
  };

  const handleReset = () => {
    playClick();
    setSelectedLine(null);
    setHasWon(false);
    setShowHint(false);
    setAttempts(0);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/90 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl space-y-6">
      {/* Ambient Top Glow */}
      <div className="absolute -top-20 left-1/3 h-56 w-72 rounded-full bg-[#D9A441]/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-mono font-semibold text-amber-400">
              <Bug size={13} />
              <span>Developer Easter Egg • Bug Hunt Challenge</span>
            </span>
            {hasWon && (
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                <Trophy size={11} />
                BUG RÉSOLU
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-gray-400 font-mono">
            Un défi pour les recruteurs & Tech Leads : trouvez l&apos;erreur de transaction Spring Boot en cliquant sur la ligne défectueuse !
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowHint(!showHint)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono text-gray-300 hover:text-white hover:border-white/20 transition-colors cursor-pointer"
          >
            <HelpCircle size={13} className="text-[#D9A441]" />
            <span>Indice</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            title="Recommencer"
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      {/* Hint Alert */}
      {showHint && !hasWon && (
        <div className="rounded-xl border border-[#D9A441]/30 bg-[#D9A441]/10 p-3.5 text-xs font-mono text-[#D9A441] flex items-start gap-2.5 animate-in fade-in">
          <AlertTriangle size={15} className="shrink-0 mt-0.5" />
          <span>
            💡 <strong>Indice Spring Boot :</strong> Observez bien le type d&apos;exception levée (`Exception` vs `RuntimeException`) et la manière dont l&apos;annotation `@Transactional` gère les rollbacks automatiques par défaut.
          </span>
        </div>
      )}

      {/* Interactive Code Editor Box */}
      <div className="rounded-2xl border border-white/15 bg-neutral-950 p-4 sm:p-5 font-mono text-xs overflow-x-auto shadow-inner">
        <div className="space-y-1">
          {CODE_LINES.map((line) => {
            const isSelected = selectedLine === line.lineNum;
            const isLineBug = line.isBug;

            let rowBg = "hover:bg-white/[0.04]";
            let textColor = "text-gray-300";

            if (isSelected) {
              if (isLineBug) {
                rowBg = "bg-emerald-500/20 border-l-2 border-emerald-400";
                textColor = "text-emerald-300 font-bold";
              } else {
                rowBg = "bg-red-500/15 border-l-2 border-red-400";
                textColor = "text-red-300";
              }
            }

            return (
              <div
                key={line.lineNum}
                onClick={() => handleLineClick(line)}
                className={`flex items-center gap-4 px-2.5 py-1 rounded transition-colors cursor-pointer ${rowBg}`}
              >
                <span className="w-6 text-right text-[11px] text-gray-600 select-none">
                  {line.lineNum}
                </span>
                <span className={`flex-1 whitespace-pre ${textColor}`}>
                  {line.code}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Success Badge Banner */}
      {hasWon && (
        <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5 space-y-3 animate-in zoom-in-95 duration-200">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 shadow-md shadow-emerald-500/20">
              <Trophy size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <span>Félicitations ! Badge Débloqué :</span>
                <span className="text-[#D9A441] underline">Senior Spring Architect</span>
              </h4>
              <p className="text-xs font-mono text-emerald-400 mt-0.5">
                {CODE_LINES.find((l) => l.lineNum === selectedLine)?.explanation}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
