export function pluckEmails<T extends {email: string}>(arr: T[]): string[] {
  const emailArr: string[] = [];
  arr.forEach( (element) => {
    emailArr.push(element.email);
  } );
  return emailArr;
}