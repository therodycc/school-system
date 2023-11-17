export interface ClassroomI {
    id: number;
    name: string;
    capacity: number;
    location: string;
    created_at: Date;
    teacherId?: number
}