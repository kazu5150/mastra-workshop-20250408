"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/thread";
import { ThreadList } from "@/components/assistant-ui/thread-list";

export const Assistant = () => {
  const runtime = useChatRuntime({
    api: "/api/chat",
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="min-h-dvh bg-gradient-to-br from-[#0f1729] via-[#1a1f35] to-[#2a1f3d] relative overflow-hidden">
        {/* 星空効果 */}
        <div className="absolute inset-0 bg-[radial-gradient(white,_rgba(255,255,255,0)_2px)] bg-[length:50px_50px] opacity-[0.15] animate-twinkle"></div>
        
        <div className="mx-auto max-w-7xl px-4 py-6 relative">
          <div className="grid grid-cols-1 gap-6 rounded-xl bg-slate-900/50 p-6 shadow-lg backdrop-blur-md lg:grid-cols-[280px_1fr] border border-slate-700/30">
            <div className="rounded-lg bg-slate-800/50 p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:bg-slate-800/70 border border-slate-700/30">
              <ThreadList />
            </div>
            <div className="rounded-lg bg-slate-800/50 p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:bg-slate-800/70 border border-slate-700/30">
              <Thread />
            </div>
          </div>
        </div>
      </div>
    </AssistantRuntimeProvider>
  );
};
