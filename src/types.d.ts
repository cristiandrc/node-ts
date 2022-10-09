import { Visibility, Weather } from './enums'
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export interface NonSensitiveDiaryEntry extends Omit<DiaryEntry, 'comment'> { }

export interface NewDiaryEntry extends Omit<DiaryEntry, 'id'> { }
