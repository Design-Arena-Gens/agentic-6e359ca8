'use client'

import { Activity, Flame, Heart, Target, TrendingUp, Zap } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const workoutData = [
  { day: 'Mon', calories: 420, duration: 45 },
  { day: 'Tue', calories: 380, duration: 40 },
  { day: 'Wed', calories: 520, duration: 60 },
  { day: 'Thu', calories: 460, duration: 50 },
  { day: 'Fri', calories: 510, duration: 55 },
  { day: 'Sat', calories: 610, duration: 70 },
  { day: 'Sun', calories: 340, duration: 35 },
]

const activityData = [
  { name: 'Cardio', value: 35, color: '#ff6b6b' },
  { name: 'Strength', value: 40, color: '#4ecdc4' },
  { name: 'Flexibility', value: 15, color: '#ffd93d' },
  { name: 'Sports', value: 10, color: '#95e1d3' },
]

const stats = [
  { icon: Flame, label: 'Calories Burned', value: '3,240', change: '+12%', color: '#ff6b6b' },
  { icon: Activity, label: 'Workouts', value: '24', change: '+8%', color: '#4ecdc4' },
  { icon: Heart, label: 'Avg Heart Rate', value: '142 bpm', change: '+3%', color: '#ff8fab' },
  { icon: Zap, label: 'Active Minutes', value: '355', change: '+15%', color: '#ffd93d' },
]

export default function Dashboard() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '32px 24px' }}>
        <header style={{ marginBottom: '48px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '800', color: 'white', margin: '0 0 8px 0' }}>
            Fitness Dashboard
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
            Track your progress and stay motivated
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '20px',
              padding: '28px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              transition: 'transform 0.2s',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{
                  background: `${stat.color}20`,
                  borderRadius: '12px',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <stat.icon size={28} color={stat.color} strokeWidth={2.5} />
                </div>
                <span style={{
                  background: '#e8f5e9',
                  color: '#2e7d32',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '600'
                }}>
                  {stat.change}
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#666', margin: '0 0 8px 0', fontWeight: '500' }}>
                {stat.label}
              </p>
              <p style={{ fontSize: '32px', fontWeight: '700', color: '#1a1a1a', margin: 0 }}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '32px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
          }}>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a1a', margin: '0 0 24px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <TrendingUp size={24} color="#667eea" />
              Weekly Calories Burned
            </h2>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={workoutData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    background: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="calories"
                  stroke="#667eea"
                  strokeWidth={3}
                  dot={{ fill: '#667eea', r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '32px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
          }}>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a1a', margin: '0 0 24px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Target size={24} color="#764ba2" />
              Workout Duration (mins)
            </h2>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={workoutData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    background: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
                <Bar dataKey="duration" fill="#764ba2" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '32px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
        }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a1a', margin: '0 0 24px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Activity size={24} color="#4ecdc4" />
            Activity Breakdown
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center', justifyContent: 'center' }}>
            <ResponsiveContainer width={300} height={300}>
              <PieChart>
                <Pie
                  data={activityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {activityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {activityData.map((activity, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '6px',
                    background: activity.color
                  }} />
                  <span style={{ fontSize: '16px', color: '#333', fontWeight: '500', minWidth: '120px' }}>
                    {activity.name}
                  </span>
                  <span style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a' }}>
                    {activity.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer style={{ marginTop: '48px', textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
          <p style={{ margin: 0 }}>Keep pushing your limits! 💪</p>
        </footer>
      </div>
    </div>
  )
}
