"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SAFETY_METRICS, INCIDENT_TRENDS } from "@/lib/constants/sustainability";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function SafetyDashboard() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Safety Excellence Dashboard</h2>
          <p className="text-gray-600">
            Our commitment to zero harm drives every decision we make
          </p>
        </div>

        {/* Key Safety Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SAFETY_METRICS.map((metric, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                  <span className="text-2xl">{metric.icon}</span>
                  {metric.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-navy">{metric.value}</span>
                    <span className="text-lg text-gray-600">{metric.unit}</span>
                  </div>
                  {metric.target && (
                    <div className="text-sm text-gray-500">
                      Target: {metric.target} {metric.unit}
                    </div>
                  )}
                  <div className="text-sm font-medium text-gold">{metric.period}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Incidents and Near Misses Trend */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-navy">
                Incidents & Near Misses (2024)
              </CardTitle>
              <p className="text-sm text-gray-600">
                Lower is better - trend shows continuous improvement
              </p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={INCIDENT_TRENDS}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="incidents"
                    stroke="#EF4444"
                    strokeWidth={2}
                    name="Incidents"
                  />
                  <Line
                    type="monotone"
                    dataKey="nearMisses"
                    stroke="#F59E0B"
                    strokeWidth={2}
                    name="Near Misses"
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>
                  <strong>Current Status:</strong> Zero lost-time incidents for 487 consecutive
                  days. Near miss reporting has increased, indicating strong safety culture.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Training Hours Trend */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-navy">
                Safety Training Hours (2024)
              </CardTitle>
              <p className="text-sm text-gray-600">
                Continuous investment in employee safety training
              </p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={INCIDENT_TRENDS}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="trainingHours" fill="#FDB714" name="Training Hours" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>
                  <strong>2024 Total:</strong> 12,450+ training hours delivered across all sites.
                  Every employee receives monthly safety training.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Safety Commitments */}
        <div className="mt-12 bg-navy text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6">Our Safety Commitments</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gold mb-2">Zero Harm Philosophy</h4>
              <p className="text-gray-300 text-sm">
                We believe every accident is preventable. Our goal is zero injuries, zero
                incidents, and zero harm to our people and communities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gold mb-2">Continuous Training</h4>
              <p className="text-gray-300 text-sm">
                Every employee receives comprehensive safety training before starting work and
                ongoing refresher training throughout their career.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gold mb-2">Equipment Excellence</h4>
              <p className="text-gray-300 text-sm">
                Regular maintenance, modern safety features, and strict inspection protocols ensure
                our equipment operates safely at all times.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gold mb-2">Culture of Reporting</h4>
              <p className="text-gray-300 text-sm">
                We encourage near-miss reporting and learning from incidents. Every report makes us
                safer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
