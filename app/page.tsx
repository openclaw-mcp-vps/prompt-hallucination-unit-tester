export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Prompt Testing
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Unit Tests for{" "}
          <span className="text-[#58a6ff]">AI Hallucinations</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Build test suites for your AI prompts. Automatically detect hallucinations and factual errors before they reach your users.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Testing — $29/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">🧪</div>
            <h3 className="text-white font-semibold mb-2">Test Suites</h3>
            <p className="text-[#8b949e] text-sm">Create structured test cases for any prompt. Define expected outputs and fact constraints.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">🔍</div>
            <h3 className="text-white font-semibold mb-2">Hallucination Detection</h3>
            <p className="text-[#8b949e] text-sm">Automatically fact-check AI outputs against reliable sources using external validation APIs.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📊</div>
            <h3 className="text-white font-semibold mb-2">Reliability Reports</h3>
            <p className="text-[#8b949e] text-sm">Get detailed reports on prompt reliability scores, failure patterns, and improvement suggestions.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] mb-8">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited test suites",
              "OpenAI & Anthropic support",
              "Automated hallucination detection",
              "Fact-checking via external APIs",
              "Detailed reliability reports",
              "CI/CD integration",
              "Priority support"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-4 rounded-lg text-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does hallucination detection work?</h3>
            <p className="text-[#8b949e]">We run your prompts through your chosen AI model, then cross-reference the outputs against trusted fact-checking APIs and knowledge sources to flag any claims that appear fabricated or factually incorrect.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Which AI models are supported?</h3>
            <p className="text-[#8b949e]">We support all major OpenAI models (GPT-4, GPT-3.5) and Anthropic models (Claude 3 family). Bring your own API keys and test any model configuration.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I integrate this into my CI/CD pipeline?</h3>
            <p className="text-[#8b949e]">Yes. We provide a REST API and CLI tool so you can run prompt regression tests automatically on every deployment, just like unit tests for regular code.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Prompt Hallucination Unit Tester. All rights reserved.
      </footer>
    </main>
  )
}
