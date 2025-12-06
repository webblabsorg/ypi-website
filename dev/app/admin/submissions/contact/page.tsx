'use client';

/**
 * Contact Submissions Management
 * View and manage contact form submissions
 */

import { useState } from 'react';
import { DataTable, type Column } from '@/components/admin/DataTable';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Trash2, Download } from 'lucide-react';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
  submittedAt: string;
  status: 'new' | 'replied' | 'archived';
}

// TODO: Phase 13 - Replace with database queries
const mockSubmissions: ContactSubmission[] = [
  {
    id: '1',
    name: 'Kwame Mensah',
    email: 'kwame.m@example.com',
    phone: '+233244123456',
    category: 'General Inquiry',
    message: 'Interested in learning more about your drilling services',
    submittedAt: '2025-12-06T10:30:00Z',
    status: 'new',
  },
  {
    id: '2',
    name: 'Sarah Osei',
    email: 'sarah.osei@company.com',
    phone: '+233501234567',
    category: 'Partnership',
    message: 'Would like to discuss potential partnership opportunities',
    submittedAt: '2025-12-05T14:20:00Z',
    status: 'replied',
  },
  {
    id: '3',
    name: 'John Addo',
    email: 'j.addo@mining.com',
    phone: '+233242345678',
    category: 'Technical Support',
    message: 'Need assistance with equipment maintenance',
    submittedAt: '2025-12-04T09:15:00Z',
    status: 'replied',
  },
  {
    id: '4',
    name: 'Abena Asante',
    email: 'abena@example.com',
    phone: '+233558765432',
    category: 'Career Inquiry',
    message: 'Asking about job opportunities in operations',
    submittedAt: '2025-12-03T16:45:00Z',
    status: 'archived',
  },
];

export default function ContactSubmissionsPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>(mockSubmissions);

  const columns: Column<ContactSubmission>[] = [
    {
      key: 'name',
      label: 'Name',
      sortable: true,
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
    },
    {
      key: 'category',
      label: 'Category',
      sortable: true,
    },
    {
      key: 'submittedAt',
      label: 'Submitted',
      sortable: true,
      render: (submission) => new Date(submission.submittedAt).toLocaleDateString(),
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (submission) => {
        const variants: Record<string, 'default' | 'secondary' | 'outline'> = {
          new: 'default',
          replied: 'secondary',
          archived: 'outline',
        };
        return <Badge variant={variants[submission.status]}>{submission.status}</Badge>;
      },
    },
  ];

  const handleDelete = (submissionId: string) => {
    if (confirm('Are you sure you want to delete this submission?')) {
      setSubmissions(submissions.filter((s) => s.id !== submissionId));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy">Contact Submissions</h1>
          <p className="text-gray-600 mt-1">View and manage contact form submissions</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <DataTable
        data={submissions}
        columns={columns}
        keyExtractor={(submission) => submission.id}
        actions={(submission) => (
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => handleDelete(submission.id)}>
              <Trash2 className="h-4 w-4 text-red-600" />
            </Button>
          </div>
        )}
        itemsPerPage={10}
        emptyMessage="No contact submissions yet"
      />

      <div className="text-xs text-gray-500 italic">
        Note: Phase 12 implementation with mock data. Phase 13 will add database persistence and email integration.
      </div>
    </div>
  );
}
