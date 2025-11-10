import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PropertyHub Platform - Case Study | Jerry Duran",
  description: "Modern real estate platform with virtual tours, CRM integration, and advanced property search.",
};

export default function RealEstatePlatformCaseStudy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          ← Back to Portfolio
        </Link>

        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-black dark:text-white">
            PropertyHub Platform
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">
            Modern real estate platform with virtual tours and CRM
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["Vue.js", "Node.js", "MongoDB", "Socket.io", "MapBox API"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="mb-12 w-full rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <Image
            src="/realestate-preview.png"
            alt="PropertyHub real estate platform showing property listings, search functionality, and modern user interface"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="prose prose-zinc max-w-none dark:prose-invert">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Project Overview
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              A comprehensive real estate platform designed to connect buyers, sellers, and agents through
              modern web technologies. The platform features virtual property tours, advanced search
              capabilities, and integrated CRM functionality for real estate professionals.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Built to handle high traffic and complex property data, the platform serves thousands of
              users daily and processes millions of property listings with real-time updates and notifications.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Key Features
            </h2>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>• Interactive property search with map integration</li>
              <li>• 360° virtual tours and high-resolution galleries</li>
              <li>• Real-time chat between buyers and agents</li>
              <li>• Advanced filtering and saved searches</li>
              <li>• CRM dashboard for agent lead management</li>
              <li>• Mortgage calculator and financing tools</li>
              <li>• Automated property alerts and notifications</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Technical Architecture
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Frontend</h3>
                <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 text-sm">
                  <li>• Vue.js 3 with Composition API</li>
                  <li>• Vuex for state management</li>
                  <li>• MapBox for interactive maps</li>
                  <li>• Progressive Web App (PWA) features</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Backend</h3>
                <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 text-sm">
                  <li>• Node.js with Express framework</li>
                  <li>• MongoDB with aggregation pipelines</li>
                  <li>• Socket.io for real-time features</li>
                  <li>• JWT authentication and role-based access</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Challenges & Solutions
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              One of the main challenges was optimizing performance while handling large datasets of
              property listings and high-resolution images. We implemented lazy loading, image optimization,
              and database indexing strategies to ensure fast search results.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Real-time communication between users required careful consideration of scalability.
              Socket.io was implemented with Redis clustering to handle multiple concurrent chat
              sessions and property updates across different server instances.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Results & Impact
            </h2>
            <div className="grid gap-4 md:grid-cols-3 mb-6">
              <div className="text-center p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                <div className="text-2xl font-bold text-black dark:text-white mb-2">500K+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Property Listings</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                <div className="text-2xl font-bold text-black dark:text-white mb-2">95%</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Uptime Reliability</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                <div className="text-2xl font-bold text-black dark:text-white mb-2">40%</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Lead Conversion Increase</div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/"
            className="rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            View More Projects
          </Link>
        </div>
      </main>
    </div>
  );
}