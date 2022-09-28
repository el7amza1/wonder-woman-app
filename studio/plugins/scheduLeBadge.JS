// import {ScheduledBadge} from 'sanity/scheduled-publishing'
// import defaultResolve from 'part:@sanity/base/document-badges'

// export default function resolveDocumentBadges(props) {
//   // Default document badges
//   const defaultBadges = defaultResolve(props)

//   // Show the scheduled badge on `movie` documents only
//   if (props.type === 'interns') {
//     // Add our scheduled badge after any defaults
//     return [...defaultBadges, ScheduledBadge]
//   }

//   // Return default badges for all other document types
//   return defaultBadges
// }