export function pair<A, B>(a: A[], b: B[]): [A, B][] {
  const trainingPairs: [A, B][] = []; 
  if (a.length <= b.length) {
      a.forEach( (element, index) => {
        let trainingPair: [A, B] = [element, b[index]];
        trainingPairs.push(trainingPair);
      });
  } else {
    b.forEach( (element, index) => {
        let trainingPair: [A, B] = [a[index], element];
        trainingPairs.push(trainingPair);
    });
  }  
  return trainingPairs;
}
