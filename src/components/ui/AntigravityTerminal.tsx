"use client";

import React, { useState, useEffect, useRef } from "react";

type TerminalState = "IDLE" | "PROCESSING" | "STREAMING";

interface LogEntry {
  id: string;
  type: "user" | "system" | "response";
  content: string;
}

const RESPONSES: Record<string, string> = {
  "/profile": "Aniruddha Payas is a full-stack AI engineer building optimized web architectures and specialized RAG pipelines. Focus areas: async queues, geospatial matching, and deterministic agent workflows.",
  "/architecture aegis": "Aegis AI utilizes a decoupled distributed framework. Ingested docs undergo matrix chunking into a pgvector repo. Execution load is queued via Redis/BullMQ, serving text tokens using SSE pipes.",
  "/verify skill-bridge": "Skill-Bridge achieves zero-friction localized verification by abandoning SMS architectures in favor of secured Supabase Email OTP engines. Uses native PostGIS ST_DWithin protocols."
};

const DEFAULT_RESPONSE = "Inquiry logged. For deep technical verification, execute predefined operational vectors: /profile, /architecture aegis, or /verify skill-bridge.";

export const AntigravityTerminal = () => {
  const [state, setState] = useState<TerminalState>("IDLE");
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [streamingText, setStreamingText] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs, streamingText]);

  const handleCommand = async (cmd: string) => {
    if (state !== "IDLE" || !cmd.trim()) return;

    const trimmedCmd = cmd.trim();
    setInputValue("");
    setState("PROCESSING");
    
    // Add user command to logs
    addLog("user", `guest@antigravity:~# ${trimmedCmd}`);

    // Processing sequence
    await delay(400);
    addLog("system", "[SYSTEM] Intercepted natural language token. Vectorizing...");
    await delay(600);
    addLog("system", "[EMBEDDING] Generated 384-dim tensor matrix.");
    await delay(500);
    addLog("system", "[VECTOR DB] Querying pgvector remote index...");
    await delay(700);
    addLog("system", "[LLM INFERENCE] Routing to Groq Llama-3-70B...");
    await delay(500);

    setState("STREAMING");
    
    const responseText = RESPONSES[trimmedCmd] || DEFAULT_RESPONSE;
    
    // Stream response
    setStreamingText("");
    for (let i = 0; i <= responseText.length; i++) {
      setStreamingText(responseText.substring(0, i));
      await delay(20);
    }

    addLog("response", responseText);
    setStreamingText("");
    setState("IDLE");
  };

  const addLog = (type: "user" | "system" | "response", content: string) => {
    setLogs((prev) => [...prev, { id: Math.random().toString(36).substr(2, 9), type, content }]);
  };

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputValue);
    }
  };

  return (
    <div className="w-full bg-[#000000] rounded-xl overflow-hidden border border-[var(--accent-amber)]/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] font-mono text-sm flex flex-col h-[500px]">
      {/* Top Bar */}
      <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 relative">
        <div className="flex gap-2 z-10">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[10px] text-[var(--text-muted)] tracking-widest uppercase">
            agent-core-v1.0.4 // status: {state.toLowerCase()}
          </span>
        </div>
      </div>

      {/* Terminal Body */}
      <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-3">
        <div className="text-[var(--text-muted)] opacity-70 mb-6">
          System Initialized. Type a command or select an operational vector below.
        </div>
        
        {logs.map((log) => (
          <div key={log.id} className={`leading-relaxed ${
            log.type === "user" ? "text-white" : 
            log.type === "system" ? "text-green-400 opacity-80" : "text-[var(--accent-amber)]"
          }`}>
            {log.content}
          </div>
        ))}
        
        {streamingText && (
          <div className="text-[var(--accent-amber)] leading-relaxed">
            {streamingText}<span className="animate-pulse">_</span>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white/5 border-t border-white/10">
        <div className="flex gap-2 mb-4 flex-wrap">
          {["/profile", "/architecture aegis", "/verify skill-bridge"].map((chip) => (
            <button
              key={chip}
              onClick={() => handleCommand(chip)}
              disabled={state !== "IDLE"}
              className="px-3 py-1.5 text-xs rounded border border-white/10 text-[var(--text-muted)] hover:text-[var(--accent-amber)] hover:border-[var(--accent-amber)]/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-black/50"
            >
              {chip}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 text-[var(--text-primary)]">
          <span className="text-green-400 font-semibold whitespace-nowrap">guest@antigravity:~#</span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={state !== "IDLE"}
            className="flex-grow bg-transparent outline-none disabled:opacity-50"
            spellCheck="false"
            autoComplete="off"
            placeholder={state === "IDLE" ? "Execute operational vector..." : "Processing..."}
          />
        </div>
      </div>
    </div>
  );
};
