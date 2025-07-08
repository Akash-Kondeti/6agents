
import { ArrowRight, Zap, Shield } from "lucide-react";

interface Agent {
  id: string;
  name: string;
  description: string;
  link: string;
  icon: string;
  color: string;
}

interface AgentCardProps {
  agent: Agent;
  onClick: () => void;
}

export function AgentCard({ agent, onClick }: AgentCardProps) {
  return (
    <div
      onClick={onClick}
      className="group bg-white/90 backdrop-blur-sm border-2 border-gray-100 hover:border-blue-200 rounded-2xl p-5 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 relative overflow-hidden hover:bg-white"
    >
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-0 group-hover:opacity-8 transition-all duration-500`}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="bg-white/90 rounded-full p-1.5 shadow-lg">
          <Zap className="w-3 h-3 text-yellow-500" />
        </div>
      </div>
      
      <div className="flex items-start space-x-4 relative">
        {/* Enhanced Icon */}
        <div className={`bg-gradient-to-br ${agent.color} rounded-2xl p-4 text-white text-xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl border border-white/20`}>
          {agent.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          {/* Title with Status */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-800 text-base leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
              {agent.name}
            </h3>
            <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <ArrowRight className="w-4 h-4 text-blue-500 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 group-hover:text-gray-700 transition-colors">
            {agent.description}
          </p>
          
          {/* Footer with Enhanced Elements */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300 border border-blue-100">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Ready Now
              </span>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Shield className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            
            <div className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 font-medium">
              Click to connect →
            </div>
          </div>
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${agent.color} opacity-10 blur-xl`}></div>
      </div>
    </div>
  );
}
