import React, { useState, useEffect } from 'react';
import { Shield, Eye, Mail, BarChart2, Loader } from 'lucide-react';

interface Stats { totalVisits: number; totalMessages: number; }
interface Message { _id: string; firstName: string; lastName: string; email: string; subject: string; message: string; createdAt: string; }

const AdminPage = () => {
  const [secretKey, setSecretKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [stats, setStats] = useState<Stats | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedKey = sessionStorage.getItem('admin-secret-key');
    if (storedKey) {
      setSecretKey(storedKey);
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchDashboardData();
    }
  }, [isAuthenticated]);
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (secretKey) {
      sessionStorage.setItem('admin-secret-key', secretKey);
      setIsAuthenticated(true);
    }
  };

  const fetchDashboardData = async () => {
    setLoading(true);
    setError('');
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    if (!API_BASE_URL) {
      setError("Configuration Error: VITE_API_BASE_URL is not set.");
      setLoading(false);
      return;
    }
    const storedKey = sessionStorage.getItem('admin-secret-key');
    const headers = {
      'Content-Type': 'application/json',
      'x-admin-secret-key': storedKey || '',
    };
    try {
      const [statsRes, messagesRes] = await Promise.all([
        fetch(`${API_BASE_URL}/api/admin/stats`, { headers }),
        fetch(`${API_BASE_URL}/api/admin/messages`, { headers }),
      ]);
      if (!statsRes.ok) throw new Error(`Failed to fetch stats: Server responded with status ${statsRes.status}`);
      if (!messagesRes.ok) throw new Error(`Failed to fetch messages: Server responded with status ${messagesRes.status}`);
      const statsData = await statsRes.json();
      const messagesData = await messagesRes.json();
      setStats(statsData.data);
      setMessages(messagesData.data);
    } catch (err: any) {
      setError(err.message);
      setIsAuthenticated(false);
      sessionStorage.removeItem('admin-secret-key');
    } finally {
      setLoading(false);
    }
  };
  
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handlePasswordSubmit} className="p-8 bg-white rounded-lg shadow-md w-full max-w-sm">
          <div className="flex flex-col items-center mb-6">
            <Shield className="w-12 h-12 text-blue-600 mb-2" />
            <h1 className="text-2xl font-bold text-gray-800">Admin Access</h1>
          </div>
          <input
            type="password"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
            placeholder="Your Secret Key"
            className="w-full px-4 py-2 mb-4 border rounded-md"
          />
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md">Unlock</button>
          {error && <p className="text-red-500 text-center mt-4 text-sm">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
        {loading && <Loader className="animate-spin w-8 h-8 text-blue-600" />}
        {error && <p className="text-red-500 bg-red-100 p-4 rounded-md">{error}</p>}
        {stats && !loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm"><p className="text-sm text-gray-500">Total Unique Visits</p><p className="text-3xl font-bold">{stats.totalVisits}</p></div>
            <div className="bg-white p-6 rounded-lg shadow-sm"><p className="text-sm text-gray-500">Total Form Submissions</p><p className="text-3xl font-bold">{stats.totalMessages}</p></div>
          </div>
        )}
        <div className="bg-white p-6 rounded-lg shadow-sm overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4">Contact Form Submissions</h2>
          <table className="w-full text-left">
            <thead><tr className="border-b"><th className="p-3">Date</th><th className="p-3">Name</th><th className="p-3">Email</th><th className="p-3">Subject</th><th className="p-3">Message</th></tr></thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg._id} className="border-b">
                  <td className="p-3 text-sm">{new Date(msg.createdAt).toLocaleString()}</td>
                  <td className="p-3 font-medium">{`${msg.firstName} ${msg.lastName}`}</td>
                  <td className="p-3 text-blue-600"><a href={`mailto:${msg.email}`}>{msg.email}</a></td>
                  <td className="p-3">{msg.subject}</td>
                  <td className="p-3 text-sm max-w-xs truncate">{msg.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {messages.length === 0 && !loading && <p className="text-center py-8">No messages yet.</p>}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;