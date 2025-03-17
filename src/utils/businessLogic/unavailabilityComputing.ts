const getSumOfInstalledPowerByInverters = (inverters: any): number =>
  inverters.reduce((total: any, current: any) => total + (current?.peak_power ?? 0), 0)

const computeUnavailabilityWithImpactedPowers = (
    stopImpactedPower: number,
    inverters: any
  ): number | null => {
    if (!inverters || inverters.length === 0) return 0
  
    const sumOfInstalledPower = getSumOfInstalledPowerByInverters(inverters)
  
    if (!sumOfInstalledPower) return null
  
    return Math.round((stopImpactedPower / sumOfInstalledPower) * 100)
}

const unavailabilityComputed = (plant: any): number | null => {
   return plant.inverters ? 
        computeUnavailabilityWithImpactedPowers(plant.impacted_powers?.stop ?? 0, plant.inverters)
        : null
}
    

export {
    unavailabilityComputed
}