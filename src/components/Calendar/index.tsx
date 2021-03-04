import format from 'date-fns/format';
import styles from './style.module.css';
import { add, isBefore, isSameDay, sub } from 'date-fns';
import React, {useContext, useEffect, useState} from 'react';
import { calendarBuild } from './build';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {useUserState} from '../../selectors/stateSelectors';
import {Context} from "../../context";

export const Calendar=()=>{
    const [calendar,setCalendar]=useState<any>([])
    //const [currentDay,setCurrentDay]=useState<any>(new Date())
    const {currentDay,setUserData,userData,setCurrentDay,inputText}:any=useContext(Context)

    const userState=useUserState()

    useEffect(()=>{
        setCalendar(calendarBuild(currentDay))
    },[currentDay])
    
    const isSelected=(day:any)=>{
        return isSameDay(currentDay,day)
    }

    const updateDay=(day:any):any=>{
        let dayNumber=format(day,"d");
        const dataToUpdate={...userData,day:dayNumber}
        setUserData(dataToUpdate)
        setCurrentDay(day)
    }

    const isToday=(day:any)=>{
        return isSameDay(new Date(),day)
    }

    const isBeforeToday=(day:any)=>{
        return isBefore(day, new Date())
    }

    const dayStyles=(day:any)=>{
        if(isToday(day)) return styles.today
        if(isBeforeToday(day)) return styles.before
        if(isSelected(day)) return styles.selected
        return ""
    }

    const currMonth=()=>{
      return format(currentDay, "MMMM")
    }

    const currYear=()=>{
      return format(currentDay, "yyy")
    }

    const prevMonth=()=>{
      return sub(currentDay,{months: 1})
    }

    return(
        <div className={styles.body}>
            <div className={styles.header}>
                <ArrowLeftIcon onClick={()=>prevMonth()} className={styles.icon}/>
                <div>{currMonth()} {currYear()}</div>
                <ArrowRightIcon className={styles.icon}/>
            </div>
            <div className={styles.calendar}>{
            calendar.map((week:any) => <div>{
                week.map((day:any)=><button className={styles.day} onClick={()=>updateDay(day)}>
                    <div className={dayStyles(day)}>{format(day,"d")}</div></button>)}</div>)
        }</div>
        </div>
    )
}