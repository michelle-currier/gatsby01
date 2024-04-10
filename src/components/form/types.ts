export interface FormField {
    type: string
    name: string
    initial: string
    className?: string
    element: 'input' | 'textarea'
}
  
export type FormDataState = { [key: string]: string }
  
export type FormSubmitState = 'INITIAL' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'