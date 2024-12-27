import { store, timeCounter } from '../redux/store/store';
import moment from 'moment';

export function counter() {
    setInterval(() => store.dispatch(timeCounter()), 1000);
}

export function isLive(statusID: any) {
    return statusID > 0 && statusID < 14;
}

export function getMatchTime(match: any, ticks: any) {
    var statusTimeTicks = Math.floor(moment.utc(match.statusTime).valueOf() / 1000);

    var seconds = ticks - statusTimeTicks;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    var milsecToStart = moment.utc(match.time).valueOf() - moment.utc().valueOf();
    return getMatchPeriod(minutes, seconds, match.statusID, milsecToStart);
}

export function getMatchPeriod(minutes: any, seconds: any, matchStatus: any, milsecToStart: any) {
    var addtime = '';
    switch (matchStatus) {
        case 1:
            return getTimeToStart(milsecToStart, '00:00');
        case 2:
            if (minutes >= 45) {
                addtime = '45+';
                minutes = minutes - 45;
            }
            break;
        case 3:
            return '45:00';
        case 4:
            minutes = minutes + 45;
            if (minutes >= 90) {
                addtime = '90+';
                minutes = minutes - 90;
            }
            break;
        case 5:
            return '90:00';
        case 6:
            minutes = minutes + 90;
            if (minutes >= 105) {
                addtime = '105+';
                minutes = minutes - 105;
            }
            break;
        case 7:
            return '105:00';
        case 8:
            minutes = minutes + 105;
            if (minutes >= 120) {
                addtime = '120+';
                minutes = minutes - 120;
            }
            break;
        case 9:
            return '120:00';
        case 10:
            return 'brotsspark';
        case 11:
        case 12:
        case 13:
            return 'liðugt';
        default:
            return getTimeToStart(milsecToStart, '');
    }
    var min = minutes;
    var sec = seconds;
    if (minutes < 10)
        {min = '0' + minutes;}
    if (seconds < 10)
        {sec = '0' + seconds;}
    return addtime + ' ' + min + ':' + sec;
}

export function getTimeToStart(milsecToStart: number, defaultText: string) {
    var minutesToStart = Math.ceil(milsecToStart / 60000);
    if (minutesToStart > 0) {
        var days = Math.floor(minutesToStart / 1440);
        var hours = Math.floor((minutesToStart - days * 1440) / 60);
        var minutes = minutesToStart - days * 1440 - hours * 60;
        if (days > 0) {
            return `${days}d. ${hours}t.`;
        }
        else {
            var hoursText = hours > 0 ? hours + 't. ' : '';
            return `${hoursText}${minutes}m.`;
        }
    }
    else {
        return defaultText;
    }
}

export function getMatchTimeColor(matchStatusID: any) {
    switch (matchStatusID) {
        case 0:
        case 1:
        case 14:
            return 'yellow';
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            return 'lightgreen';
        case 12:
        case 13:
            return '#ee2400';
    }
}
