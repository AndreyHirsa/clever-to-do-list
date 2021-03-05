import { startOfISOWeek, startOfMonth, lastDayOfISOWeek, lastDayOfMonth, addDays, isBefore } from "date-fns"

export const calendarBuild=(currentDay:Date):Date[][]=>{
    const startDay=startOfISOWeek(startOfMonth(currentDay))
    const lastDay=lastDayOfISOWeek(lastDayOfMonth(currentDay))
    const calendar=[]
    let result=startDay

        while(isBefore(result,lastDay)){
            calendar.push(Array(7).fill(0).map(()=>{
                result = addDays(result,1);
                return result
            }))
        }
    return calendar    
}

