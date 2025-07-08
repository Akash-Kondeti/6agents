import { useState } from "react";
import { MessageSquare, Bot, X, ArrowLeft, Sparkles, Headphones } from "lucide-react";
import { AgentCard } from "./AgentCard";

interface Agent {
  id: string;
  name: string;
  description: string;
  link: string;
  icon: string;
  color: string;
}

const agents: Agent[] = [
  {
    id: "vat-tax",
    name: "VAT Tax Filing Agent",
    description: "AI-powered assistant designed to simplify VAT registration, compliance, and tax filing for businesses operating across different jurisdictions.",
    link: "https://app.relevanceai.com/agents/f1db6c/40f9760672f4-47b5-89f9-e3cdb99d658d/9e055167-86af-4b52-b868-976894eca43b/embed-chat?hide_tool_steps=true&hide_file_uploads=false&hide_conversation_list=true&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=true&hide_description=false",
    icon: "📊",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "hoc-law",
    name: "HoC Law Agent",
    description: "AI-powered assistant designed to simplify legal compliance, tax registration, and corporate structuring for businesses expanding internationally.",
    link: "https://app.relevanceai.com/agents/f1db6c/40f9760672f4-47b5-89f9-e3cdb99d658d/a400ed30-0a45-4329-9ace-25fb7f05f77c/embed-chat?hide_tool_steps=true&hide_file_uploads=true&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd/chat&input_placeholder_text=Type+your+message...&hide_logo=true&conversationId=new",
    icon: "⚖️",
    color: "from-purple-500 to-violet-600"
  },
  {
    id: "hoc-onboarding",
    name: "HOC Onboarding Agent",
    description: "AI-powered assistant designed to guide clients through the process of selecting and understanding the services offered by House of Companies.",
    link: "https://app.relevanceai.com/agents/f1db6c/40f9760672f4-47b5-89f9-e3cdb99d658d/2431215e-12cd-4569-84d0-1b159fcf8101/embed-chat?hide_tool_steps=true&hide_file_uploads=true&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=true",
    icon: "🚀",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "secretarial",
    name: "Secretarial Agent",
    description: "AI-powered virtual assistant designed to streamline branch registration processes for businesses expanding internationally.",
    link: "https://app.relevanceai.com/agents/f1db6c/40f9760672f4-47b5-89f9-e3cdb99d658d/46f26762-a55b-4305-a15f-118d52c785a3/embed-chat?hide_tool_steps=true&hide_file_uploads=true&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=true",
    icon: "📋",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "client-support",
    name: "Client Support Agent",
    description: "The Client Support Agent chatbot is designed to provide seamless support to clients throughout their journey.",
    link: "https://app.relevanceai.com/agents/f1db6c/40f9760672f4-47b5-89f9-e3cdb99d658d/20542b5a-6655-41e4-b0a0-11225b50ff79/embed-chat?hide_tool_steps=true&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%2300002B&bubble_icon=pd%2Fchat&input_placeholder_text=Say+Hii+Here....&hide_logo=true&hide_description=false",
    icon: "🤝",
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: "lead-assistance",
    name: "Lead Assistance Agent",
    description: "The Lead Assistance Agent is a chatbot designed to streamline the lead onboarding process, ensuring a smooth and efficient experience for potential clients.",
    link: "https://app.relevanceai.com/agents/f1db6c/40f9760672f4-47b5-89f9-e3cdb99d658d/ea6c4ac7-3414-47fe-870c-edda402eb899/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%2300002B&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=true&hide_description=false",
    icon: "💼",
    color: "from-pink-500 to-rose-500"
  }
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const handleAgentSelect = (agent: Agent) => {
    setSelectedAgent(agent);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedAgent(null);
  };

  const handleBackToAgents = () => {
    setSelectedAgent(null);
  };

  return (
    <>
      {/* Enhanced Chat Widget Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white rounded-full p-4 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-110 border border-white/20 backdrop-blur-sm"
          >
            <Headphones className="w-6 h-6" />
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse font-bold shadow-lg">
              6
            </div>
            
            {/* Enhanced Floating Tooltip */}
            <div className="absolute bottom-full right-0 mb-4 hidden group-hover:block animate-fade-in">
              <div className="bg-gray-900/95 backdrop-blur-sm text-white text-sm rounded-xl px-4 py-3 whitespace-nowrap shadow-2xl border border-gray-700/50 relative">
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <div>
                    <div className="font-semibold">Business Services AI</div>
                    <div className="text-xs text-gray-300">6 Assistants Available</div>
                  </div>
                </div>
                <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/95"></div>
              </div>
            </div>
          </button>
        </div>
      )}

      {/* Enhanced Chat Widget Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden border border-gray-200/50 backdrop-blur-sm">
            {/* Professional Header */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-5 text-white relative overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
              
              <div className="flex items-center justify-between relative">
                <div className="flex items-center space-x-4">
                  {selectedAgent && (
                    <button
                      onClick={handleBackToAgents}
                      className="hover:bg-white/20 rounded-full p-2.5 transition-all duration-200 hover:scale-110 group"
                    >
                      <ArrowLeft className="w-5 h-5 group-hover:translate-x-[-2px] transition-transform" />
                    </button>
                  )}
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30 shadow-lg">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">
                      {selectedAgent ? selectedAgent.name : "Business Services AI Assistants"}
                    </h2>
                    <p className="text-blue-100 text-sm">
                      {selectedAgent ? "Connected and ready to assist" : "Choose your specialized assistant"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="hover:bg-white/20 rounded-full p-2.5 transition-all duration-200 hover:scale-110 group"
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                </button>
              </div>
            </div>

            {/* Content with Scroll */}
            <div className="max-h-[calc(85vh-100px)] h-[calc(85vh-100px)] overflow-hidden">
              {!selectedAgent ? (
                <div className="p-6 h-full overflow-y-auto custom-scrollbar">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4 shadow-lg">
                      <Sparkles className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Our AI Hub</h3>
                    <p className="text-gray-600 text-base max-w-2xl mx-auto">
                      Select from our specialized AI assistants designed to handle every aspect of your business needs, 
                      from legal compliance to international expansion.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {agents.map((agent) => (
                      <AgentCard
                        key={agent.id}
                        agent={agent}
                        onClick={() => handleAgentSelect(agent)}
                      />
                    ))}
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>All Agents Online</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-4 h-4" />
                        <span>AI-Powered</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Bot className="w-4 h-4" />
                        <span>24/7 Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full">
                  <iframe
                    src={selectedAgent.link}
                    className="w-full h-[calc(85vh-100px)] border-0"
                    title={selectedAgent.name}
                    allow="microphone; camera; clipboard-read; clipboard-write"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
