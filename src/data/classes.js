export const classes = [
{id:'strength-foundations',name:'Strength Foundations',kind:'Strength',level:'Beginner',minutes:50,price:1800,seats:8,description:'Learn the squat, hinge, press, and carry with clear coaching.',days:'Monday · 6:00 PM'},
{id:'barbell-build',name:'Barbell Build',kind:'Strength',level:'Intermediate',minutes:60,price:2200,seats:6,description:'Progress your main lifts in a small coached group.',days:'Tuesday · 6:00 PM'},
{id:'mobility-reset',name:'Mobility Reset',kind:'Mobility',level:'All levels',minutes:45,price:1400,seats:10,description:'Restore comfortable movement after a long desk day.',days:'Monday · 7:15 PM'},
{id:'sunrise-yoga',name:'Sunrise Yoga',kind:'Yoga',level:'All levels',minutes:60,price:1600,seats:12,description:'A steady morning flow with adaptable poses.',days:'Wednesday · 7:00 AM'},
{id:'core-control',name:'Core Control',kind:'Strength',level:'Beginner',minutes:45,price:1500,seats:9,description:'Build balance and trunk strength with guided progressions.',days:'Thursday · 6:00 PM'},
{id:'power-circuit',name:'Power Circuit',kind:'Cardio',level:'Intermediate',minutes:45,price:1900,seats:7,description:'Timed intervals with clear rest and intensity options.',days:'Friday · 6:00 PM'},
{id:'restorative-yoga',name:'Restorative Yoga',kind:'Yoga',level:'All levels',minutes:60,price:1700,seats:10,description:'Slow stretches and breathing in a calm space.',days:'Saturday · 10:00 AM'},
{id:'run-ready',name:'Run Ready',kind:'Cardio',level:'Beginner',minutes:50,price:1700,seats:8,description:'Running drills, warmups, and manageable conditioning.',days:'Sunday · 8:00 AM'},
{id:'pilates-align',name:'Pilates Align',kind:'Mobility',level:'All levels',minutes:55,price:1800,seats:8,description:'Controlled mat exercises for posture and stability.',days:'Tuesday · 7:15 PM'},
{id:'lift-lab',name:'Lift Lab',kind:'Strength',level:'Intermediate',minutes:60,price:2300,seats:5,description:'Technique focused lifting with individual feedback.',days:'Saturday · 11:30 AM'}
];
export async function loadClasses(fail=false){await new Promise(r=>setTimeout(r,450));if(fail)throw new Error('Demo loading failure');return classes;}
