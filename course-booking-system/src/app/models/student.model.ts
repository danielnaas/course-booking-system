export interface Student {
    id: number;
    name: string;
    email: string;
    enrolledCourseIds: Array<number>;
    phoneNumber?: number;
    registrationDate?: Date;

}
