export const knowledgeBase = {
    attractions: [
        {
            id: 'humanoid',
            name: 'Humanoid Robot Zone',
            location: 'North Wing, Ground Floor',
            duration: '30 minutes',
            age: 'All ages',
            description: 'Advanced humanoid robots that dance, interact, and demonstrate AI capabilities. Watch robots recognize faces, respond to voice commands, and perform synchronized dances.',
            keywords: ['humanoid', 'dance', 'face', 'voice', 'north', 'ground']
        },
        {
            id: 'ai_lab',
            name: 'AI Innovation Lab',
            location: 'East Wing, Second Floor',
            duration: '45 minutes',
            age: '10+ years',
            description: 'Hands-on experience with machine learning and neural networks. Program your own robot, train simple AI models, interactive coding stations.',
            keywords: ['ai', 'lab', 'innovation', 'code', 'program', 'machine learning', 'east', 'second']
        },
        {
            id: 'drone',
            name: 'Drone Flight Arena',
            location: 'South Wing, Ground Floor',
            duration: '20 minutes',
            age: '8+ years',
            description: 'Synchronized drone shows and piloting experiences. Professional drone performances, beginner-friendly flight simulators.',
            keywords: ['drone', 'flight', 'fly', 'south', 'ground']
        },
        {
            id: 'combat',
            name: 'Robot Combat Arena',
            location: 'West Wing, Ground Floor',
            duration: '40 minutes',
            age: '12+ years',
            description: 'Exciting robot battles and competitions. Watch professional robot fights, participate in beginner battles.',
            keywords: ['combat', 'fight', 'battle', 'west', 'ground']
        },
        {
            id: 'nano',
            name: 'Nano Robotics Exhibition',
            location: 'Central Hall, First Floor',
            duration: '25 minutes',
            age: 'All ages',
            description: 'Explore microscopic robots and their real-world applications. Learn about medical nano-robots, environmental applications, future technology.',
            keywords: ['nano', 'micro', 'medical', 'central', 'first']
        },
        {
            id: 'assembly',
            name: 'Robotic Assembly Line',
            location: 'North Wing, First Floor',
            duration: '35 minutes',
            age: 'All ages',
            description: 'Industrial robots demonstrating modern manufacturing. See automated assembly, quality control robots, collaborative robots (cobots).',
            keywords: ['assembly', 'industrial', 'manufacturing', 'factory', 'north', 'first']
        }
    ],
    schedules: {
        drone: ['10:00 AM', '1:00 PM', '4:00 PM', '6:00 PM'],
        dance: ['11:00 AM', '2:00 PM', '5:00 PM'],
        combat: ['12:00 PM', '3:00 PM', '6:30 PM']
    },
    pricing: {
        adult: 899,
        child: 599,
        senior: 699,
        family: 2499,
        annual: 7999
    },
    hours: {
        weekdays: '9:00 AM - 7:00 PM',
        weekends: '9:00 AM - 9:00 PM',
        holidays: '10:00 AM - 8:00 PM'
    },
    facilities: [
        'Free high-speed WiFi',
        'Restrooms on each floor (wheelchair accessible)',
        'Food court with 8 restaurants',
        'Robotics-themed gift shop',
        'Free parking (500+ spaces)',
        'Secure lockers (₹50)',
        'First aid station',
        'Lost and found',
        'Wheelchair rental'
    ],
    safety: [
        'Children under 12 must be accompanied by an adult',
        'Do not touch robots unless permitted',
        'Stay behind safety barriers',
        'No flash photography near sensitive equipment'
    ],
    transport: {
        address: 'Inker Robotics Campus, Sector 42, Tech Park Road',
        metro: 'RoboPark Station (Blue Line) - 5 min walk',
        bus: 'Routes 45, 67, 89, 120',
        parking: 'Free parking available'
    },
    entities: {
        inker_robotics: {
            name: "Inker Robotics",
            description: "Inker Robotics is a robotics and emerging technology company based in Thrissur, Kerala. The company focuses on research, development, training and products in areas such as robotics, artificial intelligence, Internet of Things, 3D printing and related futuristic technologies.",
            mission: "To democratise access to futuristic technologies and improve lives using robotics and AI driven solutions.",
            contact: "info@inkerrobotics.com | +91 90615 00800",
            location: "Thrissur, Kerala, India",
            initiatives: ["RoboPark", "Training academies", "Futuristech R&D"]
        },
        robopark: {
            name: "RoboPark Thrissur",
            description: "India’s first dedicated RoboPark and a tech driven ecosystem that combines technology tourism, education, research and startup incubation.",
            verticals: [
                "RoboLand: Interactive robotics experiences",
                "Teknowledge Academy: Skill development",
                "Futuristech: R&D arm",
                "Inkubator: Startup support"
            ],
            developed_by: "Inker Robotics in partnership with KSUM and Thrissur District Panchayat"
        }
    }
};
