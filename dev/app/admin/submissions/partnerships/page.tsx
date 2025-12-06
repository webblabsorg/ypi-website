'use client';

/**
 * Partnership Submissions Management
 * Review and manage partnership applications
 */

import { useState } from 'react';
import { DataTable, type Column } from '@/components/admin/DataTable';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Trash2, Download } from 'lucide-react';

interface Partnership {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  partnershipType: string;
  message: string;
  submittedAt: string;
  status: 'pending' | 'under-review' | 'approved' | 'rejected';
}

// TODO: Phase 13 - Replace with database queries
const mockPartnerships: Partnership[] = [
  {
    id: '1',
    companyName: 'Global Equipment Suppliers Ltd',
    contactName: 'Michael Osei',
    email: 'm.osei@globalequip.com',
    phone: '+233244567890',
    partnershipType: 'Equipment Supply',
    message: 'Interested in supplying drilling equipment and parts',
    submittedAt: '2025-12-05T11:20:00Z',
    status: 'pending',
  },
  {
    id: '2',
    companyName: 'West African Logistics',
    contactName: 'Fatima Bah',
    email: 'f.bah@walogistics.com',
    phone: '+233501234567',
    partnershipType: 'Logistics Services',
    message: 'Offering heavy equipment transport services',
    submittedAt: '2025-12-04T09:45:00Z',
    status: 'under-review',
  },
  {
    id: '3',
    companyName: 'Mining Consultants Africa',
    contactName: 'Dr. Emmanuel Akoto',
    email: 'e.akoto@miningconsult.com',
    phone: '+233242345678',
    partnershipType: 'Technical Consulting',
    message: 'Partnership for geological consulting services',
    submittedAt: '2025-12-02T14:30:00Z',
    status: 'approved',
  },
  {
    id: '4',
    companyName: 'SafetyFirst Training',
    contactName: 'Grace Mensah',
    email: 'grace@safetyfirst.com',
    phone: '+233558765432',
    partnershipType: 'Training & Development',
    message: 'Safety training partnership proposal',
    submittedAt: '2025-11-28T10:15:00Z',
    status: 'under-review',
  },
];

export default function PartnershipSubmissionsPage() {
  const [partnerships, setPartnerships] = useState<Partnership[]>(mockPartnerships);

  const columns: Column<Partnership>[] = [
    {
      key: 'companyName',
      label: 'Company',
      sortable: true,
    },
    {
      key: 'contactName',
      label: 'Contact Person',
      sortable: true,
    },
    {
      key: 'partnershipType',
      label: 'Type',
      sortable: true,
    },
    {
      key: 'submittedAt',
      label: 'Submitted',
      sortable: true,
      render: (item) => new Date(item.submittedAt).toLocaleDateString(),
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (item) => {
        const variants: Record<string, 'default' | 'secondary' | 'outline' | 'destructive'> = {
          pending: 'default',
          'under-review': 'secondary',
          approved: 'outline',
          rejected: 'destructive',
        };
        return <Badge variant={variants[item.status]}>{item.status}</Badge>;
      },
    },
  ];

  const handleDelete = (partnershipId: string) => {
    if (confirm('Are you sure you want to delete this partnership application?')) {
      setPartnerships(partnerships.filter((p) => p.id !== partnershipId));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy">Partnership Applications</h1>
          <p className="text-gray-600 mt-1">Review partnership inquiries</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <DataTable
        data={partnerships}
        columns={columns}
        keyExtractor={(item) => item.id}
        actions={(item) => (
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              Approve
            </Button>
            <Button variant="ghost" size="sm" onClick={() => handleDelete(item.id)}>
              <Trash2 className="h-4 w-4 text-red-600" />
            </Button>
          </div>
        )}
        itemsPerPage={10}
        emptyMessage="No partnership applications yet"
      />

      <div className="text-xs text-gray-500 italic">
        Note: Phase 12 implementation with mock data. Phase 13 will add database persistence and approval workflow.
      </div>
    </div>
  );
}
