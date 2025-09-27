import React from 'react'
import { Plus, Edit, Trash2, Star } from 'lucide-react'

// Mock data
const mockChores = [
  { id: '1', title: 'Make your bed', isCore: true, active: true },
  { id: '2', title: 'Brush your teeth', isCore: true, active: true },
  { id: '3', title: 'Put away toys', isCore: false, active: true },
  { id: '4', title: 'Help set the table', isCore: false, active: true },
  { id: '5', title: 'Feed the pet', isCore: false, active: false }
]

export function ChoreManagement() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Chore Management</h1>
        <button className="btn-primary child-tap flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Chore</span>
        </button>
      </div>

      <div className="grid gap-4">
        {mockChores.map((chore) => (
          <div key={chore.id} className="card p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${chore.isCore ? 'bg-primary' : 'bg-secondary'}`} />
                <div>
                  <h3 className="font-medium text-foreground">{chore.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {chore.isCore ? 'Core Task' : 'Extra Task'} • {chore.active ? 'Active' : 'Inactive'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-muted rounded-md">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="p-2 hover:bg-muted rounded-md text-destructive">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
