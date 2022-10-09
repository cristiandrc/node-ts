import diaryData from './diaries.json'
import { DiaryEntry, NonSensitiveDiaryEntry } from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveDiaryEntry | undefined => {
  const entry: DiaryEntry | undefined = diaries.find(e => e.id === id)

  if (entry !== undefined) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }

  return entry
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return { id, date, weather, visibility }
  })
}

export const addEntry = (): undefined => undefined
