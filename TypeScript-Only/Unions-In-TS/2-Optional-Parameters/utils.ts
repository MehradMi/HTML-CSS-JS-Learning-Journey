
export function calculateApiCost(numReqs: number, tier?: string) {
    switch (tier) {
      case "pro":
        return numReqs * 0.05;
      case "enterprise":
        return numReqs * 0.03;
      default:
        return numReqs * 0.1;
    }
}