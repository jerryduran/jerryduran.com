import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FitTracker Mobile App - Case Study | Jerry Duran",
  description: "Cross-platform fitness tracking mobile app with social features and real-time workout monitoring.",
};

export default function FitnessMobileAppCaseStudy() {
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
            FitTracker Mobile App
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">
            Cross-platform fitness tracking app with social features
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["React Native", "Firebase", "Redux", "Expo", "Push Notifications"].map((tag) => (
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
            src="/fitness-preview.png"
            alt="FitTracker mobile app interface showing workout tracking, social features, and progress analytics"
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
              A comprehensive fitness tracking mobile application designed to help users monitor their
              workouts, track progress, and connect with a community of fitness enthusiasts. Built with
              React Native for cross-platform compatibility on both iOS and Android.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              The app focuses on user engagement through social features while providing detailed analytics
              and personalized workout recommendations based on user behavior and fitness goals.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Key Features
            </h2>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>• Workout tracking with timer and rep counting</li>
              <li>• Social feed with workout sharing and achievements</li>
              <li>• Personalized workout plans and recommendations</li>
              <li>• Progress analytics with detailed charts and insights</li>
              <li>• Friend challenges and leaderboards</li>
              <li>• Offline mode for workouts without internet</li>
              <li>• Push notifications for motivation and reminders</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Technical Implementation
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Mobile Development</h3>
                <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 text-sm">
                  <li>• React Native with Expo framework</li>
                  <li>• Redux for state management</li>
                  <li>• React Navigation for routing</li>
                  <li>• Native modules for device sensors</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Backend & Services</h3>
                <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 text-sm">
                  <li>• Firebase for authentication and database</li>
                  <li>• Cloud Functions for serverless logic</li>
                  <li>• Push notifications via FCM</li>
                  <li>• AsyncStorage for offline data</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              User Experience Design
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              The app's design prioritizes ease of use during workouts, with large touch targets and
              clear visual hierarchy. The interface adapts to different workout contexts, providing
              minimal distractions during active sessions while offering rich data during rest periods.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Social features are seamlessly integrated to encourage community engagement without
              overwhelming users who prefer private tracking. The design supports both beginner and
              advanced users with progressive disclosure of features.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Results & Impact
            </h2>
            <div className="grid gap-4 md:grid-cols-3 mb-6">
              <div className="text-center p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                <div className="text-2xl font-bold text-black dark:text-white mb-2">10K+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Active Users</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                <div className="text-2xl font-bold text-black dark:text-white mb-2">85%</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">User Retention Rate</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                <div className="text-2xl font-bold text-black dark:text-white mb-2">4.8/5</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">App Store Rating</div>
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