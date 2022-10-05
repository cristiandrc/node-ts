import diaryData from './diaries.json'
import { DiaryEntry } from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = () => diaries

export const addEntry = () => null