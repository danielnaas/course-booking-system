export interface Student {
    id: number;
    name: string;
    email?: string;
    enrolledCourseIds?: number[];
    phoneNumber?: number;
    registrationDate?: Date;

}
