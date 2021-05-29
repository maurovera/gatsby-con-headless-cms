import {format} from 'date-fns';


/**
 *  @param {string | Date} date
 *  @param {String} formatter 
 * 
 * @returns
 **/

export const formatDate =( date, formatter = 'mm/dd/yyyy') =>{
    
    return format(new Date(date), formatter);
    
}