import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loomis Pet Waste - Case Study | Jerry Duran",
  description: "A modern web solution for pet waste management services featuring responsive design and user-friendly interface.",
};

export default function LoomisPetWasteCaseStudy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-16">
        <Link
          href="/"
          className="mb-6 sm:mb-8 inline-flex items-center text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          ← Back to Portfolio
        </Link>

        <header className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black dark:text-white">
              Loomis Pet Waste
            </h1>
            <a
              href="https://www.loomispetwaste.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium transition-colors hover:scale-105 active:scale-95"
            >
              <span>Visit Live Site</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-6 leading-relaxed">
            Full-stack web platform for pet waste removal services in Modesto/Central Valley area
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
            {["Next.js 15", "TypeScript", "Material-UI", "Framer Motion", "Stripe", "Supabase", "Figma", "Tailwind CSS"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="mb-12 w-full rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <Image
            src="/loomis-preview2.png"
            alt="Loomis Pet Waste platform showing service booking interface, scheduling system, and customer management features"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="prose prose-zinc max-w-none dark:prose-invert">
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-3 sm:mb-4">
              Project Overview
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              A comprehensive full-stack web platform built for a pet waste removal service in the Modesto/Central Valley area.
              The platform handles the entire customer journey from initial quotes to payment processing, serving multiple
              cities including Stockton, Tracy, Modesto, and surrounding areas.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              The challenge was to create a modern, scalable solution that could handle complex pricing structures,
              secure payment processing, and location-based services while providing an exceptional user experience
              that would help a local business grow their customer base.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Key Features
            </h2>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>• Responsive landing page with animated components</li>
              <li>• Multi-tier pricing system with recurring & one-time services</li>
              <li>• Stripe payment integration with secure checkout</li>
              <li>• Customer dashboard for service management</li>
              <li>• Location-based service pages for multiple cities</li>
              <li>• Professional UI/UX with dark mode support</li>
              <li>• Supabase backend for authentication & data management</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Technical Implementation
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Frontend</h3>
                <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 text-sm">
                  <li>• Built with Next.js 15 and TypeScript</li>
                  <li>• Material-UI component library</li>
                  <li>• Framer Motion for animations</li>
                  <li>• Responsive design with dark mode</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Backend & Services</h3>
                <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 text-sm">
                  <li>• Supabase for authentication & database</li>
                  <li>• Stripe payment integration</li>
                  <li>• Server-side rendering (SSR)</li>
                  <li>• Location-based service routing</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Design Process
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              The design process began in Figma with wireframes and prototypes to visualize the user journey
              and test different layouts. The goal was to create a platform that would help a local business
              compete effectively in the digital space while building trust with potential customers.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Figma prototypes were used to validate the design approach before development, ensuring the
              multi-tier pricing system and service flow were intuitive. Material-UI components were then
              customized to match the Figma designs, while Framer Motion added engaging animations that
              enhance user experience without being distracting.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Results & Impact
            </h2>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
              <div className="text-center p-4 sm:p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                <div className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2">Full-Stack</div>
                <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">Complete Solution</div>
              </div>
              <div className="text-center p-4 sm:p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                <div className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2">Multi-City</div>
                <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">Service Coverage</div>
              </div>
              <div className="text-center p-4 sm:p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900 sm:col-span-2 lg:col-span-1">
                <div className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2">Secure</div>
                <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">Stripe Payments</div>
              </div>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              The platform successfully handles everything from initial quotes to payment processing,
              making it easy for customers to book professional pet waste cleanup services across
              Stockton, Tracy, Modesto, and surrounding areas. The solution helps streamline operations
              and grow the customer base through modern web technology.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Lessons Learned
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              This project demonstrated the power of modern full-stack development in helping local businesses
              thrive. The combination of Next.js 15, TypeScript, and Supabase provided excellent developer
              experience while ensuring scalability and performance. Material-UI with Framer Motion created
              a professional, engaging interface that builds trust with customers, while Stripe integration
              ensures secure, reliable payment processing.
            </p>
          </section>
        </div>

        <div className="mt-12 sm:mt-16 flex justify-center px-4">
          <Link
            href="/"
            className="w-full sm:w-auto text-center rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            View More Projects
          </Link>
        </div>
      </main>
    </div>
  );
}