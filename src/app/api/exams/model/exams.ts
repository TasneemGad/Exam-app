import { Diploma } from "../../../component/diploma/diploma";

export interface Exams {
id: string;
  title: string;
  description: string;
  image: string;
  duration: number;
  questionsCount: number;
  diplomaId: string;
  diploma: Diploma;
}
