// 汎用Typescript型定義
import Vue from 'vue'

// validation用
export interface VForm extends Vue {
  validate(): boolean
  reset(): void
  resetValidation(): void
}