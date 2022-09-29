import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2022-09-27",
  useCdn: true, // `false` if you want to ensure fresh data
  //token: 'sk9zDZsh8rI0LnZfRIOBPl5qJgzWrnNT9tyGtxuN5Y2LDFXMylf2TcR1bLafkqSuZfgkhXYYftKB6lSXR55pPHrDMpv5I3Q3Jrc2nxtH9vrkZcZP2Sp7esUw2VpwIfncCS8CnaC7vY4PpO4uqbosc8Rx4VFfpPlIryfaKxFdZQVjmNhlU8Mp'
})