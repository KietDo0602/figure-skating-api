# Figure Skating API

API for Figure Skating


### skater
- name: String
- gender: String
- country: String
- level: enum (senior, junior)
- type: enum (single men, single female, pairs, ice_dance)
- dob: Date
- age: number
- height: number (cm)
- profession: String
- coach: Coach
- start_date: Date
- residence: String
- retired_date: Date
- skating_club: String
- highest_sp: number
- highest_fs: number
- competitions: {String, ...}
- medals: {String, ...}

### skater_pair
- skater1: Skater
- skater2: Skater

### competition
- name: String
- type: String (Olympic, Worlds, GPF, ...)
- level: enum (senior, junior)
- system: enum ()
- country: String
- season: String
- start_date: date
- end_date: date
- host: String
- venue: String
- skaters: {male_skaters, female_skaters, pair_skaters, ice_dance}
- men_single: {{Skaters, total_points, short_program, long_program}, ...}
- women_single: {{Skaters, total_points, short_program, long_program}, ...}
- ice_dance: {{Skater_Pair, total_points, short_program, long_program}, ...}
- pairs: {{Skater_Pair, total_points, short_program, long_program}, ...}

### skating_club
- name: String
- country: String
- members: array (Skater)
- location: String
- website: url
- start_date: Date
- members: obj of skaters
- coach: obj
