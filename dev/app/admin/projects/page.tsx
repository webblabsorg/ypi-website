'use client';

/**
 * Projects Management
 * Manage project portfolio and case studies
 */

import { useState } from 'react';
import { DataTable, type Column } from '@/components/admin/DataTable';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  client: string;
  location: string;
  status: 'active' | 'completed' | 'on-hold';
  startDate: string;
  value: string;
}

// TODO: Phase 13 - Replace with database queries
const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Tarkwa Phase 3 Expansion',
    client: 'Gold Fields Ghana',
    location: 'Tarkwa',
    status: 'active',
    startDate: '2025-01-15',
    value: '$2.5M',
  },
  {
    id: '2',
    name: 'Obuasi Underground Drilling',
    client: 'AngloGold Ashanti',
    location: 'Obuasi',
    status: 'active',
    startDate: '2024-11-01',
    value: '$3.2M',
  },
  {
    id: '3',
    name: 'Ahafo Mine Load & Haul',
    client: 'Newmont Ghana',
    location: 'Ahafo',
    status: 'completed',
    startDate: '2024-06-01',
    value: '$1.8M',
  },
  {
    id: '4',
    name: 'Bibiani Grade Control',
    client: 'Asante Gold',
    location: 'Bibiani',
    status: 'active',
    startDate: '2025-02-01',
    value: '$950K',
  },
];

export default function ProjectsManagementPage() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);

  const columns: Column<Project>[] = [
    {
      key: 'name',
      label: 'Project Name',
      sortable: true,
    },
    {
      key: 'client',
      label: 'Client',
      sortable: true,
    },
    {
      key: 'location',
      label: 'Location',
      sortable: true,
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (project) => {
        const variants: Record<string, 'default' | 'secondary' | 'outline'> = {
          active: 'default',
          completed: 'secondary',
          'on-hold': 'outline',
        };
        return <Badge variant={variants[project.status]}>{project.status}</Badge>;
      },
    },
    {
      key: 'startDate',
      label: 'Start Date',
      sortable: true,
      render: (project) => new Date(project.startDate).toLocaleDateString(),
    },
    {
      key: 'value',
      label: 'Project Value',
      sortable: true,
    },
  ];

  const handleDelete = (projectId: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter((p) => p.id !== projectId));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy">Projects Management</h1>
          <p className="text-gray-600 mt-1">Manage project portfolio and case studies</p>
        </div>
        <Button className="bg-gold hover:bg-gold-600 text-navy">
          <Plus className="h-4 w-4 mr-2" />
          Add Project
        </Button>
      </div>

      <DataTable
        data={projects}
        columns={columns}
        keyExtractor={(project) => project.id}
        actions={(project) => (
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => handleDelete(project.id)}>
              <Trash2 className="h-4 w-4 text-red-600" />
            </Button>
          </div>
        )}
        emptyMessage="No projects found"
      />

      <div className="text-xs text-gray-500 italic">
        Note: Phase 12 implementation with mock data. Phase 13 will add full CRUD forms and database persistence.
      </div>
    </div>
  );
}
