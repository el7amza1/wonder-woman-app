// import {ScheduleAction} from "sanity/scheduled-publishing"
// import defaultResolve from 'part:@sanity/base/document-actions'

// /*
//  * Please note that this will only alter the visibility of the button in the studio.
//  * Users with document publish permissions will be able to create schedules directly
//  * via the Scheduled Publishing API.
//  */

// export default function resolveDocumentActions(props) {
//   // Default document actions
//   const defaultActions = defaultResolve(props)

//   // Show the schedule button on `movie` documents only
//   if (props.type === 'interns') {
//     // Add our schedule action AFTER the first action (publish, by default)
//     // to ensure it sits at the top of our document context menu.
//     return [...defaultActions.slice(0, 1), ScheduleAction, ...defaultActions.slice(1)]
//   }

//   // Finally, return default actions for all other document types
//   return defaultActions
// }