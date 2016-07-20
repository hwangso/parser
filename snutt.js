var courses = {};
var times = [];
const dayOfTheWeek = {
  0: 'MON',
  1: 'TUE',
  2: 'WED',
  3: 'THU',
  4: 'FRI',
  5: 'SAT',
  6: 'SUN',
};
const timeConverter = {
  0: '08:00',
  1: '09:00',
  2: '09:30',
  3: '10:00',
  4: '10:30',
  5: '11:00',
  6: '11:30',
  7: '12:00',
  8: '12:30',
  9: '13:00',
  10: '13:30',
  11: '14:00',
  12: '14:30',
  13: '15:00',
  14: '15:30',
  15: '16:00',
  16: '16:30',
  17: '17:00',
  18: '17:30',
  19: '18:15',
  20: '19:00',
  21: '19:45',
  22: '20:30',
  23: '21:15',
};
my_lectures.forEach((lecture)=>{
  const { course_number, course_title, instructor, class_time } = lecture;
  var start_time = parseFloat(class_time.replace(/[()]/g,"").split('-')[0].slice(1))*2;
  var duration = parseFloat(class_time.replace(/[()]/g,"").split('-')[1])*2;
  var end_time = start_time + duration;
  var location = lecture.location.split("/")[0];
  var class_times = lecture.class_time.split("/");
  for (var i=0;i<class_times.length;i++){
    let wday = wday_to_num(class_times[i].charAt(0));
    times = [{
      course_id : course_number,
      day: dayOfTheWeek[wday],
      start: timeConverter[start_time-1],
      end: timeConverter[end_time-1],
    }, ...times];
  }
  courses[course_number] = {
    id : course_number,
    subject: course_title,
    professor : instructor,
    classroom : location
  };
});
({ courses, times })
