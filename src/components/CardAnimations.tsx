"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function useHoverPlay() {
  const [playing, setPlaying] = useState(false);
  const onMouseEnter = useCallback(() => setPlaying(true), []);
  const onMouseLeave = useCallback(() => setPlaying(false), []);
  const onClick = useCallback(() => setPlaying((p) => !p), []);
  return { playing, onMouseEnter, onMouseLeave, onClick };
}

export function InfrastructureAnimation() {
  const { playing, onMouseEnter, onMouseLeave, onClick } = useHoverPlay();

  return (
    <div
      className="flex h-full w-full cursor-pointer items-center justify-center bg-white"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <svg viewBox="0 0 320 200" className="h-full w-full" fill="none">
        {/* Computer */}
        <rect x="110" y="70" width="100" height="75" rx="6" stroke="black" strokeWidth="2.5" />
        <rect x="118" y="78" width="84" height="55" rx="2" stroke="black" strokeWidth="1.5" fill={playing ? "#f0f0f0" : "white"} />
        <rect x="130" y="150" width="60" height="6" rx="2" stroke="black" strokeWidth="2" />
        <rect x="145" y="145" width="30" height="5" stroke="black" strokeWidth="1.5" />

        {/* Document */}
        <motion.g
          animate={
            playing
              ? { x: 0, y: 0, scale: 0.6, opacity: 0 }
              : { x: 0, y: 0, scale: 1, opacity: 1 }
          }
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.g
            animate={
              playing
                ? { x: 120, y: 60 }
                : { x: 0, y: 0 }
            }
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <rect x="30" y="60" width="50" height="65" rx="3" stroke="black" strokeWidth="2" fill="white" />
            <line x1="38" y1="75" x2="72" y2="75" stroke="black" strokeWidth="1.5" />
            <line x1="38" y1="85" x2="72" y2="85" stroke="black" strokeWidth="1.5" />
            <line x1="38" y1="95" x2="65" y2="95" stroke="black" strokeWidth="1.5" />
            <line x1="38" y1="105" x2="70" y2="105" stroke="black" strokeWidth="1.5" />
          </motion.g>
        </motion.g>

        {/* Mouse cursor */}
        <motion.g
          animate={
            playing
              ? { x: 50, y: -10 }
              : { x: 0, y: 0 }
          }
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <path
            d="M45 130 L45 150 L50 146 L54 155 L57 153 L53 145 L58 143 Z"
            fill="black"
            stroke="black"
            strokeWidth="1"
          />
        </motion.g>

        {/* Loading indicator on screen when document arrives */}
        <AnimatePresence>
          {playing && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <motion.rect
                x="130" y="100" width="60" height="6" rx="3"
                fill="#e0e0e0"
              />
              <motion.rect
                x="130" y="100" width="60" height="6" rx="3"
                fill="black"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 1, ease: "easeInOut" }}
                style={{ originX: 0 }}
              />
              <motion.text
                x="160" y="118"
                textAnchor="middle"
                fontSize="8"
                fill="black"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
              >
                Analyzing...
              </motion.text>
            </motion.g>
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
}

export function BlueprintAnimation() {
  const { playing, onMouseEnter, onMouseLeave, onClick } = useHoverPlay();

  return (
    <div
      className="flex h-full w-full cursor-pointer items-center justify-center bg-white"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <svg viewBox="0 0 320 200" className="h-full w-full" fill="none">
        {/* Computer */}
        <rect x="110" y="50" width="100" height="75" rx="6" stroke="black" strokeWidth="2.5" />
        <rect x="118" y="58" width="84" height="55" rx="2" stroke="black" strokeWidth="1.5" fill={playing ? "#f0f0f0" : "white"} />
        <rect x="130" y="130" width="60" height="6" rx="2" stroke="black" strokeWidth="2" />
        <rect x="145" y="125" width="30" height="5" stroke="black" strokeWidth="1.5" />

        {/* Blueprint coming out */}
        <motion.g
          animate={
            playing
              ? { y: 0, opacity: 1 }
              : { y: -30, opacity: 0 }
          }
          transition={{ duration: 0.7, delay: playing ? 0.2 : 0, ease: [0.22, 1, 0.36, 1] }}
        >
          <rect x="220" y="55" width="65" height="85" rx="3" stroke="black" strokeWidth="2" fill="white" />
          {/* Blueprint grid lines */}
          <line x1="228" y1="65" x2="277" y2="65" stroke="black" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="228" y1="75" x2="277" y2="75" stroke="black" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="228" y1="85" x2="277" y2="85" stroke="black" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="228" y1="95" x2="277" y2="95" stroke="black" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="228" y1="105" x2="277" y2="105" stroke="black" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="240" y1="60" x2="240" y2="135" stroke="black" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="255" y1="60" x2="255" y2="135" stroke="black" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="270" y1="60" x2="270" y2="135" stroke="black" strokeWidth="0.5" strokeDasharray="2 2" />
          {/* Building outline on blueprint */}
          <rect x="235" y="70" width="30" height="50" stroke="black" strokeWidth="1.5" fill="none" />
          <rect x="240" y="80" width="8" height="8" stroke="black" strokeWidth="1" />
          <rect x="252" y="80" width="8" height="8" stroke="black" strokeWidth="1" />
          <rect x="240" y="95" width="8" height="8" stroke="black" strokeWidth="1" />
          <rect x="252" y="95" width="8" height="8" stroke="black" strokeWidth="1" />
          <rect x="247" y="108" width="10" height="12" stroke="black" strokeWidth="1" />
          {/* Label */}
          <motion.text
            x="252" y="130"
            textAnchor="middle"
            fontSize="6"
            fill="black"
            fontFamily="monospace"
            initial={{ opacity: 0 }}
            animate={{ opacity: playing ? 1 : 0 }}
            transition={{ delay: 0.8 }}
          >
            BLUEPRINT
          </motion.text>
        </motion.g>

        {/* Arrow from computer to blueprint */}
        <motion.path
          d="M210 87 L218 87"
          stroke="black"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          animate={{ opacity: playing ? 1 : 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        />
        <defs>
          <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="black" />
          </marker>
        </defs>

        {/* Screen content when playing */}
        <AnimatePresence>
          {playing && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <motion.text
                x="160" y="80"
                textAnchor="middle"
                fontSize="7"
                fill="black"
                fontFamily="monospace"
              >
                Generating
              </motion.text>
              <motion.text
                x="160" y="92"
                textAnchor="middle"
                fontSize="7"
                fill="black"
                fontFamily="monospace"
              >
                Blueprint...
              </motion.text>
            </motion.g>
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
}

export function ReportAnimation() {
  const { playing, onMouseEnter, onMouseLeave, onClick } = useHoverPlay();

  return (
    <div
      className="flex h-full w-full cursor-pointer items-center justify-center bg-white"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <svg viewBox="0 0 320 200" className="h-full w-full" fill="none">
        {/* Computer */}
        <rect x="110" y="50" width="100" height="75" rx="6" stroke="black" strokeWidth="2.5" />
        <rect x="118" y="58" width="84" height="55" rx="2" stroke="black" strokeWidth="1.5" fill={playing ? "#f0f0f0" : "white"} />
        <rect x="130" y="130" width="60" height="6" rx="2" stroke="black" strokeWidth="2" />
        <rect x="145" y="125" width="30" height="5" stroke="black" strokeWidth="1.5" />

        {/* Document coming out */}
        <motion.g
          animate={
            playing
              ? { x: 0, y: 0, opacity: 1 }
              : { x: -40, y: 0, opacity: 0 }
          }
          transition={{ duration: 0.7, delay: playing ? 0.3 : 0, ease: [0.22, 1, 0.36, 1] }}
        >
          <rect x="225" y="55" width="55" height="75" rx="3" stroke="black" strokeWidth="2" fill="white" />
          {/* PDF icon top */}
          <rect x="232" y="60" width="20" height="10" rx="2" fill="black" />
          <text x="242" y="68" textAnchor="middle" fontSize="6" fill="white" fontFamily="monospace" fontWeight="bold">PDF</text>
          {/* Document lines */}
          <motion.line
            x1="232" y1="78" x2="272" y2="78"
            stroke="black" strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: playing ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          />
          <motion.line
            x1="232" y1="86" x2="268" y2="86"
            stroke="black" strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: playing ? 1 : 0 }}
            transition={{ delay: 0.7, duration: 0.3 }}
          />
          <motion.line
            x1="232" y1="94" x2="270" y2="94"
            stroke="black" strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: playing ? 1 : 0 }}
            transition={{ delay: 0.9, duration: 0.3 }}
          />
          <motion.line
            x1="232" y1="102" x2="260" y2="102"
            stroke="black" strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: playing ? 1 : 0 }}
            transition={{ delay: 1.1, duration: 0.3 }}
          />
          <motion.line
            x1="232" y1="110" x2="272" y2="110"
            stroke="black" strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: playing ? 1 : 0 }}
            transition={{ delay: 1.3, duration: 0.3 }}
          />
          <motion.line
            x1="232" y1="118" x2="265" y2="118"
            stroke="black" strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: playing ? 1 : 0 }}
            transition={{ delay: 1.5, duration: 0.3 }}
          />
        </motion.g>

        {/* Arrow */}
        <motion.path
          d="M210 87 L222 87"
          stroke="black"
          strokeWidth="2"
          markerEnd="url(#arrowhead2)"
          animate={{ opacity: playing ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        />
        <defs>
          <marker id="arrowhead2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="black" />
          </marker>
        </defs>

        {/* Screen content */}
        <AnimatePresence>
          {playing && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <motion.text
                x="160" y="82"
                textAnchor="middle"
                fontSize="7"
                fill="black"
                fontFamily="monospace"
              >
                Exporting
              </motion.text>
              <motion.text
                x="160" y="94"
                textAnchor="middle"
                fontSize="7"
                fill="black"
                fontFamily="monospace"
              >
                Report...
              </motion.text>
            </motion.g>
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
}
