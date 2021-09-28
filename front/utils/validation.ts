import zxcvbn from 'zxcvbn';

export const requireRule: any = (v: any) => !!v || '必須項目です'
export const emailRule:any = (v: any) => {
  if (v) {
    return (
      /.+@.+\..+/.test(v) ||
      '有効なメールアドレスを入力してください'
    )
  }else{
    return true
  }
}
export const registerPasswordRule: any = (v: any) => 
  !!v || 'パスワードを入力してください';
  (v: any) => zxcvbn(v).score >= 3 || '大文字・小文字・数字・記号を混ぜた強いパスワードにしてください'

