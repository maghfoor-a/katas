function gooseFilter (birds: string[]): string[] {
    // return an array containing all of the strings in the input array except those that match strings in geese
    function keepBird(bird: string): boolean {
        const geese: string[] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
        if (geese.includes(bird)) {
            return false;
        }
        return true;//just need it to ignore the geese bird
    }
    const finalArr: string[] = birds.filter(keepBird) 
    return finalArr;
  }
  
  export default gooseFilter;
  