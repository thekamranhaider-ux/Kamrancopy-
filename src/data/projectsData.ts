import { SpecProject, ServiceItem, SkillCategory, FrameworkItem } from '../types';

export const INITIAL_SPEC_PROJECTS: SpecProject[] = [
  {
    id: 'glowskin-emails',
    title: 'GlowSkin Vitamin C Face Serum — Welcome Email Sequence',
    category: 'email',
    industry: 'Skincare / eCommerce',
    brandDescription: 'Independent DTC skincare brand selling a hero 20% Vitamin C brightening serum positioned as an accessible, honestly-formulated alternative.',
    pieceCount: '5-email welcome series',
    goal: 'Convert curious subscribers into first-time buyers through education and trust, then repeat customers.',
    frameworkUsed: 'AIDA & Trust-First Nurture',
    targetAudience: 'Women aged 24–42 seeking visible skin brightening without irritation',
    customerAvatar: {
      name: 'Sarah Mitchell (31)',
      role: 'Marketing Coordinator',
      frustration: 'Has bought serums before that caused irritation or delivered no results.',
      dreamOutcome: 'Wake up to visibly brighter, even skin without a complicated 10-step routine.'
    },
    emailSequence: [
      {
        id: 'glowskin-e1',
        stepNumber: 1,
        label: 'EMAIL 1 — WELCOME EMAIL',
        objective: 'Confirm signup and set a warm, trust-first tone before any sales pitch.',
        subjectLine: "You're official — welcome to GlowSkin",
        previewText: 'It starts with one ingredient your skin has been missing.',
        body: `Hi {{first_name}},

Welcome to GlowSkin. You just joined people who are done guessing with their skincare and ready for something that actually works.

Over the next few emails, we'll show you exactly what makes our Vitamin C serum different — no pressure, just the information you need to decide confidently.

Talk soon,
The GlowSkin Team`,
        primaryCta: 'See How It Works',
        secondaryCta: 'Explore the Serum',
        whyItConverts: 'Promises value before asking for a sale, lowering resistance for upcoming emails.',
        psychologyUsed: 'Trust, Belonging'
      },
      {
        id: 'glowskin-e2',
        stepNumber: 2,
        label: 'EMAIL 2 — EDUCATIONAL EMAIL',
        objective: 'Educate on what makes an effective Vitamin C serum and position GlowSkin as the informed choice.',
        subjectLine: 'The ingredient dermatologists actually recommend',
        previewText: "It's not hype — it's what the research actually shows.",
        body: `Hi {{first_name}},

Not all Vitamin C is equal — concentration and stability both matter. Ours uses a 20% concentration paired with Vitamin E and Ferulic Acid to stay stable and gentle.

That's why so many people see a visible difference within two weeks, without the irritation that comes from poorly formulated versions.`,
        primaryCta: 'See the Full Ingredient Breakdown',
        secondaryCta: 'Compare Concentrations',
        whyItConverts: 'Positions the brand as a helpful advisor rather than a seller.',
        psychologyUsed: 'Authority, Curiosity'
      },
      {
        id: 'glowskin-e3',
        stepNumber: 3,
        label: 'EMAIL 3 — PROMOTIONAL EMAIL',
        objective: 'Convert warmed-up subscribers into first-time buyers with a clear, time-bound incentive.',
        subjectLine: 'Your discount expires at midnight',
        previewText: "This offer won't be here tomorrow.",
        body: `Hi {{first_name}},

You've learned what's in the bottle and what real customers are saying. Now it's your turn to try it.

Here's 15% off your first order — valid through midnight tonight. Use code GLOW15 at checkout.`,
        primaryCta: 'Claim Your 15% Off',
        secondaryCta: 'Shop the Serum',
        whyItConverts: 'A clear deadline paired with prior trust-building converts hesitant browsers.',
        psychologyUsed: 'Urgency, Scarcity'
      },
      {
        id: 'glowskin-e4',
        stepNumber: 4,
        label: 'EMAIL 4 — LIMITED-TIME / CART RECOVERY EMAIL',
        objective: 'Recover carts and interested browsers with a final, low-pressure nudge.',
        subjectLine: 'Your cart is waiting (and so is your glow)',
        previewText: "It's still there, right where you left it.",
        body: `Hi {{first_name}},

Looks like your serum is still sitting in your cart. We saved it for you — no need to start over.

If a question held you back, just reply. We read and answer every message personally.`,
        primaryCta: 'Complete My Order',
        secondaryCta: 'Ask a Question',
        whyItConverts: 'Removes friction and offers human support instead of repeating a hard pitch.',
        psychologyUsed: 'Convenience, Human Connection'
      },
      {
        id: 'glowskin-e5',
        stepNumber: 5,
        label: 'EMAIL 5 — THANK YOU EMAIL',
        objective: "Confirm the purchase and reinforce the customer's decision immediately after checkout.",
        subjectLine: 'Thank you — your glow-up starts now',
        previewText: "Here's what happens next.",
        body: `Hi {{first_name}},

Your order is confirmed and on its way in 3–5 business days.

We'll follow up shortly with a quick guide to get the most out of your serum from day one. Thank you for trusting us with your skin.`,
        primaryCta: 'Track My Order',
        secondaryCta: 'View Application Tips',
        whyItConverts: 'Post-purchase reassurance reduces buyer remorse and strengthens the new relationship.',
        psychologyUsed: 'Trust, Reassurance'
      }
    ],
    skillsDemonstrated: [
      'Trust-first funnel sequencing',
      'Persona development for skincare buyers',
      'Conversion copywriting without exaggerated claims',
      'Low-friction cart recovery messaging'
    ]
  },
  {
    id: 'nursing-emails',
    title: 'Home Nursing Services — Consultation Nurture Sequence',
    category: 'email',
    industry: 'Healthcare / In-Home Care',
    brandDescription: 'Local home nursing agency providing in-home elder care and post-surgical recovery, staffed by licensed RNs and certified caregivers.',
    pieceCount: '5-email nurture sequence',
    goal: 'Move worried, research-stage families toward booking a free care consultation.',
    frameworkUsed: 'Empathy-Led QUEST',
    targetAudience: 'Adult children (aged 38–58) researching care options for an aging parent',
    customerAvatar: {
      name: 'Michael Reyes (47)',
      role: 'Operations Manager',
      frustration: "Feels guilt over not being able to provide daily care himself and doesn't know who to trust.",
      dreamOutcome: 'Peace of mind that his mother is safe, cared for, and treated with dignity.'
    },
    emailSequence: [
      {
        id: 'nursing-e1',
        stepNumber: 1,
        label: 'EMAIL 1 — WELCOME EMAIL',
        objective: 'Acknowledge the inquiry with empathy and set a reassuring, professional tone.',
        subjectLine: "Thank you for reaching out about your family's care",
        previewText: "We know this isn't an easy search. We're here to help.",
        body: `Hi {{first_name}},

Thank you for reaching out. We know researching in-home care for a loved one is rarely simple, and we want to make this part easier.

Over the next couple of emails, we'll share what to look for in a home nursing agency and introduce you to the team that could be caring for your family.

No pressure — just information to help you feel confident in whatever you decide.`,
        primaryCta: 'Learn What to Look For',
        secondaryCta: 'Meet Our Nurses',
        whyItConverts: 'Leads with empathy rather than a hard sales pitch in an emotionally sensitive decision.',
        psychologyUsed: 'Empathy, Reassurance'
      },
      {
        id: 'nursing-e2',
        stepNumber: 2,
        label: 'EMAIL 2 — EDUCATIONAL EMAIL',
        objective: 'Build credibility by educating the family on how to evaluate a home nursing agency.',
        subjectLine: '5 questions to ask any home nursing agency',
        previewText: 'The right questions make the decision much clearer.',
        body: `Hi {{first_name}},

Before choosing any agency, ask: Are caregivers licensed and background-checked? Is a registered nurse involved in the care plan? What happens if a caregiver is unavailable?

We're transparent about all of this because we want you to choose with confidence — whether that's with us or elsewhere.`,
        primaryCta: 'See Our Credentials',
        secondaryCta: 'Meet Our Care Coordinators',
        whyItConverts: 'Comparison-friendly education builds trust faster than a direct pitch.',
        psychologyUsed: 'Authority, Objectivity'
      },
      {
        id: 'nursing-e3',
        stepNumber: 3,
        label: 'EMAIL 3 — PROMOTIONAL EMAIL',
        objective: 'Convert a warmed-up lead into a booked, no-obligation consultation.',
        subjectLine: 'Your free care consultation is ready to book',
        previewText: 'No obligation — just answers to your questions.',
        body: `Hi {{first_name}},

You've seen what matters when choosing a home nursing agency. The next step is a free, no-obligation consultation where we'll answer your specific questions.

It takes 20 minutes and there's no pressure to commit.`,
        primaryCta: 'Book My Free Consultation',
        secondaryCta: 'See Consultation Details',
        whyItConverts: 'Removing obligation and pressure lowers the barrier to booking for a cautious decision-maker.',
        psychologyUsed: 'Trust, Friction Reduction'
      },
      {
        id: 'nursing-e4',
        stepNumber: 4,
        label: 'EMAIL 4 — PRIORITY SCHEDULING EMAIL',
        objective: 'Create a genuine reason to book this week rather than delaying indefinitely.',
        subjectLine: 'Priority scheduling closes Friday',
        previewText: 'After this week, scheduling gets tighter.',
        body: `Hi {{first_name}},

We're currently holding a few priority consultation slots this week for families who reached out recently — including yours.

If you'd like one of these earlier slots, they're available through Friday before our schedule fills for the following weeks.`,
        primaryCta: 'Reserve My Priority Slot',
        secondaryCta: 'See Available Times',
        whyItConverts: 'A real scheduling constraint gives a careful decision-maker a legitimate reason to act now.',
        psychologyUsed: 'Gentle Urgency, Service Availability'
      },
      {
        id: 'nursing-e5',
        stepNumber: 5,
        label: 'EMAIL 5 — CONFIRMATION & REASSURANCE',
        objective: 'Confirm the booked consultation and reduce pre-call anxiety.',
        subjectLine: "Thank you for trusting us with this decision",
        previewText: "We're honored to be part of your family's care.",
        body: `Hi {{first_name}},

Your consultation is confirmed. Our care coordinator will call at your scheduled time to answer every question and walk through a care plan tailored to your family.

Thank you for considering us for something this important.`,
        primaryCta: 'Add to Calendar',
        secondaryCta: 'Prepare Questions for the Call',
        whyItConverts: 'Reassurance immediately after booking reduces cancellations and pre-call anxiety.',
        psychologyUsed: 'Reassurance, Belonging'
      }
    ],
    skillsDemonstrated: [
      'Empathetic tone-setting for sensitive healthcare decisions',
      'Trust-building sequence design',
      'Lead-to-consultation conversion writing',
      'Jargon-free healthcare communication'
    ]
  },
  {
    id: 'gym-emails',
    title: 'Gym Membership — 7-Day Trial Activation Sequence',
    category: 'email',
    industry: 'Fitness / Local Business',
    brandDescription: 'Local full-service gym offering strength training, group classes, and personal coaching with an emphasis on welcoming community.',
    pieceCount: '5-email trial activation series',
    goal: 'Convert free-trial visitors and drop-in leads into long-term paying members.',
    frameworkUsed: 'Momentum-Based AIDA',
    targetAudience: 'Local residents (aged 22–40) looking to build a consistent fitness habit',
    customerAvatar: {
      name: 'Jordan Lee (29)',
      role: 'Retail Manager',
      frustration: 'Has joined gyms before and stopped going within a month due to lack of support.',
      dreamOutcome: 'Build a consistent routine that actually sticks this time.'
    },
    emailSequence: [
      {
        id: 'gym-e1',
        stepNumber: 1,
        label: 'EMAIL 1 — WELCOME EMAIL',
        objective: 'Kick off the trial with energy and set clear expectations for the week.',
        subjectLine: 'Your 7-day trial starts now, {{first_name}}',
        previewText: "Here's exactly what to expect over the next 7 days.",
        body: `Hey {{first_name}},

Your 7-day trial is live. Here's the plan: come in for at least two sessions this week, try a class, and meet a coach — that's how most members find their groove.

We'll check in along the way, but the gym floor is open whenever you're ready.`,
        primaryCta: "See This Week's Class Schedule",
        secondaryCta: 'Book a Coach Intro',
        whyItConverts: 'Gives a clear, low-friction plan instead of leaving the user to figure it out alone.',
        psychologyUsed: 'Clarity, Community'
      },
      {
        id: 'gym-e2',
        stepNumber: 2,
        label: 'EMAIL 2 — EDUCATIONAL EMAIL',
        objective: 'Address the main reason people quit and position the gym community as the solution.',
        subjectLine: 'The #1 reason people quit the gym (and how to avoid it)',
        previewText: "It's rarely about motivation. It's about this.",
        body: `Hey {{first_name}},

Most people don't quit because they lack motivation — they quit because no one notices when they stop showing up.

That's why our coaches track attendance and check in personally. It's a small thing that makes a big difference in whether a routine actually sticks.`,
        primaryCta: 'Meet the Coaching Team',
        secondaryCta: 'See Member Stories',
        whyItConverts: 'Reframes a common past failure into a solvable environment problem.',
        psychologyUsed: 'Relatability, Accountability'
      },
      {
        id: 'gym-e3',
        stepNumber: 3,
        label: 'EMAIL 3 — PROMOTIONAL EMAIL',
        objective: 'Convert an engaged trial user into a paying member.',
        subjectLine: 'Ready to make it official?',
        previewText: "You've felt the difference already.",
        body: `Hey {{first_name}},

You've had a taste of what training here feels like. If it's clicking, now's a great time to lock in your membership — including founding-member pricing while your trial is still active.

No pressure, but the rate won't be this low once your trial ends.`,
        primaryCta: 'Join Now',
        secondaryCta: 'Compare Membership Plans',
        whyItConverts: 'Asks for commitment at the moment the trial user has felt the value firsthand.',
        psychologyUsed: 'Transformation, Value'
      },
      {
        id: 'gym-e4',
        stepNumber: 4,
        label: 'EMAIL 4 — TRIAL ENDING REMINDER',
        objective: 'Create urgency around the trial deadline to prevent silent drop-off.',
        subjectLine: 'Your trial ends in 48 hours',
        previewText: "Here's how to make the most of what's left.",
        body: `Hey {{first_name}},

Your free trial wraps up in 48 hours. If you haven't locked in your membership yet, founding-member pricing goes away at midnight tonight.

One more workout could be exactly what confirms this is worth continuing.`,
        primaryCta: 'Lock In My Rate',
        secondaryCta: 'Book One More Session',
        whyItConverts: 'An approaching trial deadline motivates action from someone who meant to decide.',
        psychologyUsed: 'Approaching Deadline, Value Retention'
      },
      {
        id: 'gym-e5',
        stepNumber: 5,
        label: 'EMAIL 5 — MEMBER WELCOME',
        objective: 'Welcome the new member and reinforce the decision immediately after signup.',
        subjectLine: 'Welcome to the team, {{first_name}}',
        previewText: 'Your first official week starts Monday.',
        body: `Hey {{first_name}},

You're officially a member — welcome to the team. Your coach will reach out this week to build your first month's plan.

This is the start of the routine that actually sticks. We've got your back.`,
        primaryCta: 'Book Your First Coaching Session',
        secondaryCta: 'Join the Member Group',
        whyItConverts: 'Immediate reinforcement and concrete next steps prevent new-member drop-off.',
        psychologyUsed: 'Belonging, Validation'
      }
    ],
    skillsDemonstrated: [
      'Habit-formation messaging for trial funnels',
      'Objection-reframing copywriting',
      'Urgency-based conversion sequencing',
      'Community-centered tone'
    ]
  },
  {
    id: 'coffee-emails',
    title: 'Neighborhood Coffee Shop — Customer Loyalty & Regulars Sequence',
    category: 'email',
    industry: 'Food & Beverage',
    brandDescription: 'Single-location independent café known for locally roasted beans and a rewards program collected at checkout.',
    pieceCount: '5-email loyalty sequence',
    goal: 'Turn one-time customers into regular weekday morning visitors.',
    frameworkUsed: 'Local-Relationship BAB',
    targetAudience: 'Local residents and commuters within walking distance',
    customerAvatar: {
      name: 'Ana Torres (34)',
      role: 'Remote Graphic Designer',
      frustration: 'Defaults to the chain café near her house out of habit, not preference.',
      dreamOutcome: 'A cozy local spot that feels like part of her daily routine.'
    },
    emailSequence: [
      {
        id: 'coffee-e1',
        stepNumber: 1,
        label: 'EMAIL 1 — WELCOME TO REWARDS',
        objective: 'Welcome the new rewards member with a friendly, local tone and explain the program simply.',
        subjectLine: "You're in — welcome to the family",
        previewText: 'Good coffee, good people, right around the corner.',
        body: `Hey {{first_name}},

Thanks for joining our rewards list. You're now part of a small group that gets first access to new roasts, seasonal drinks, and the occasional free coffee — just for showing up.

We hope to see you again soon.`,
        primaryCta: "See This Week's Menu",
        secondaryCta: 'How Rewards Work',
        whyItConverts: 'A warm, low-key welcome matches the local, friendly identity.',
        psychologyUsed: 'Belonging, Neighborly Warmth'
      },
      {
        id: 'coffee-e2',
        stepNumber: 2,
        label: 'EMAIL 2 — HOW REWARDS WORK',
        objective: 'Explain the loyalty program clearly so points do not go unused or forgotten.',
        subjectLine: "Here's how our rewards actually work",
        previewText: "It's simpler than you'd think.",
        body: `Hey {{first_name}},

Every visit earns a stamp. Ten stamps gets you a free drink, no strings attached — and we'll always remind you how close you are.

No app to download, no fine print. Just show this email or your name at the counter.`,
        primaryCta: 'Check My Rewards Balance',
        secondaryCta: "See This Week's Menu",
        whyItConverts: 'Clarity removes the friction that causes people to forget loyalty programs.',
        psychologyUsed: 'Ease, Transparency'
      },
      {
        id: 'coffee-e3',
        stepNumber: 3,
        label: 'EMAIL 3 — FREE DRINK OFFER',
        objective: 'Give a concrete, immediate reason to visit this week.',
        subjectLine: 'Your free drink is waiting',
        previewText: "It's already sitting in your account.",
        body: `Hey {{first_name}},

You've earned a free drink — no purchase required to redeem it. Come by any day this week and we'll take care of the rest.

We just wanted you to know it's there.`,
        primaryCta: 'Redeem My Free Drink',
        secondaryCta: "See This Week's Special",
        whyItConverts: 'A no-strings reward creates an easy reason to walk back in.',
        psychologyUsed: 'Reciprocity, Hospitality'
      },
      {
        id: 'coffee-e4',
        stepNumber: 4,
        label: 'EMAIL 4 — WEEKDAY MORNING PROMO',
        objective: 'Build a weekday morning visiting habit with a time-limited local deal.',
        subjectLine: 'Monday mornings just got better',
        previewText: 'A little reason to start the week right.',
        body: `Hey {{first_name}},

This week only: any drink before 9 AM, Monday through Wednesday, comes with a free pastry.

Consider it our way of making your morning routine a little better.`,
        primaryCta: 'Plan My Morning Stop',
        secondaryCta: "See This Week's Menu",
        whyItConverts: 'Targets a specific low-traffic time slot with a pleasant local perk.',
        psychologyUsed: 'Habit Building, Delight'
      },
      {
        id: 'coffee-e5',
        stepNumber: 5,
        label: 'EMAIL 5 — REGULAR THANK YOU',
        objective: 'Thank a customer who has become a regular and reinforce the relationship.',
        subjectLine: 'Thanks for making us part of your routine',
        previewText: 'This means more to us than you know.',
        body: `Hey {{first_name}},

We've noticed you've been stopping by regularly, and we just wanted to say thank you. Shops like ours run on customers like you.

Next visit, your drink's on us.`,
        primaryCta: 'Redeem My Thank-You Drink',
        secondaryCta: 'Refer a Friend',
        whyItConverts: 'Genuine recognition of loyalty strengthens the relationship far more than generic discounts.',
        psychologyUsed: 'Appreciation, Belonging'
      }
    ],
    skillsDemonstrated: [
      'Local brand tone calibration',
      'Loyalty program communication',
      'Habit-formation email sequencing',
      'Low-pressure promotional copywriting'
    ]
  },
  {
    id: 'glowskin-ads',
    title: 'GlowSkin Vitamin C Face Serum — Direct Response Meta Ad Suite',
    category: 'ads',
    industry: 'Skincare / Beauty eCommerce',
    brandDescription: 'DTC skincare brand launching a stabilized 15% Vitamin C complex face serum with ferulic acid.',
    pieceCount: '3 ad variations + Instagram caption',
    goal: 'Drive direct-response sales and high CTR from skincare-conscious women aged 24–42.',
    frameworkUsed: 'PAS (Problem, Agitate, Solution)',
    targetAudience: 'Women 24–42 searching for visible skin brightening without irritation',
    customerAvatar: {
      name: 'Sara Ahmed (31)',
      role: 'Marketing Executive',
      frustration: 'Has tried two other serums that did nothing noticeable after a full month.',
      dreamOutcome: 'Look at skin in natural light and feel confident without heavy foundation.'
    },
    adVariations: [
      {
        id: 'glowskin-ad-v1',
        versionName: 'Version 1 — Emotional Angle (Problem-First)',
        headline: "Your Skin Isn't Dull. It's Just Never Had Real Vitamin C.",
        primaryText: `You've tried the serums. The promises. The 'visible results in days.' And your skin still looks tired by 2pm.

It's not you — most Vitamin C serums oxidise before they even do their job. GlowSkin uses a stabilised 15% formula that actually stays active on your skin, so the glow you're chasing is finally within reach.

Try it for 14 days. If your skin isn't visibly brighter, it's free.`,
        ctaButton: 'Shop Now',
        whyItWorks: 'Leads with a felt problem and validates the reader instead of blaming her routine.'
      },
      {
        id: 'glowskin-ad-v2',
        versionName: 'Version 2 — Logical Angle (Ingredient Science)',
        headline: 'This Is What 15% Vitamin C Actually Looks Like',
        primaryText: `Most drugstore serums use unstable Vitamin C that breaks down within weeks of opening — which is why they stop working before you even notice a difference.

GlowSkin's formula pairs a 15% Vitamin C complex with ferulic acid, a proven stabiliser that keeps the active ingredient working longer. That means consistent, visible brightening — not a one-week placebo effect.

Backed by a 14-day visible-results guarantee.`,
        ctaButton: 'Discover More',
        whyItWorks: 'Names the exact mechanism (stability & ferulic acid) to give skeptical buyers a logical reason to trust.'
      },
      {
        id: 'glowskin-ad-v3',
        versionName: 'Version 3 — Storytelling Angle (Relatable Experience)',
        headline: "Sara Tried Two Serums That Did Nothing. Here's What Changed.",
        primaryText: `Sara had given up on Vitamin C serums after two brands promised glowing skin and delivered nothing but a smaller bank balance.

What she didn't know: most serums lose their potency within weeks of manufacturing. GlowSkin's stabilised formula was built to solve exactly that problem.

Two weeks in, she stopped needing full coverage foundation. Her skin did the talking.`,
        ctaButton: 'Start Today',
        whyItWorks: 'Uses relatable third-person story proof to overcome skepticism.'
      }
    ],
    instagramCaption: {
      headline: "Dull skin isn't your fault. Your old serum just never worked.",
      caption: `Stabilised 15% Vitamin C. Visible glow in 14 days — or it's free.

Swipe to see why most Vitamin C serums fail before they even start working.`,
      ctaButton: 'Shop Now'
    },
    ctaLibrary: [
      'Shop Now',
      'Try It Risk-Free',
      'Claim Your Serum',
      'See the Difference',
      'Start Your 14-Day Glow'
    ],
    skillsDemonstrated: [
      'PAS Framework Application',
      'Multi-angle ad creative testing',
      'Risk-reversal offer copy',
      'Ingredient-based benefit translation'
    ]
  },
  {
    id: 'nursing-ads',
    title: 'Home Nursing Services — Empathy-First Lead Gen Meta Ads',
    category: 'ads',
    industry: 'Healthcare / In-Home Care',
    brandDescription: 'Licensed in-home care agency providing professional elder care and post-surgery recovery with dedicated care coordinators.',
    pieceCount: '3 ad variations + Instagram caption',
    goal: 'Generate qualified inquiry leads from decision-making adult children.',
    frameworkUsed: 'QUEST (Qualify, Understand, Educate, Stimulate, Transition)',
    targetAudience: 'Adult children (35–60) balancing work, family, and aging parent care',
    customerAvatar: {
      name: 'Michael Reyes (47)',
      role: 'Operations Manager',
      frustration: "Lives 40 minutes away, feels guilt about not being there daily, worries every time his phone rings.",
      dreamOutcome: 'Know his mother is genuinely well cared for at home and treated with dignity.'
    },
    adVariations: [
      {
        id: 'nursing-ad-v1',
        versionName: 'Version 1 — Emotional Angle (Understanding Guilt)',
        headline: "You Can't Be There Every Day. We Can.",
        primaryText: `The guilt of not being there enough is real — and exhausting.

Our licensed home nursing team gives your parent professional, attentive care in the comfort of their own home, and gives you a care coordinator who keeps you informed every step of the way.

Because you deserve peace of mind too.`,
        ctaButton: 'Book a Free Consultation',
        whyItWorks: 'Names the emotional reality of caregiving guilt before mentioning the service, building immediate rapport.'
      },
      {
        id: 'nursing-ad-v2',
        versionName: 'Version 2 — Logical Angle (Credentials & Coordination)',
        headline: 'Licensed Nurses. Vetted Caregivers. A Coordinator Who Answers.',
        primaryText: `Every caregiver on our team is licensed, background-checked, and trained in the specific care your parent needs — from post-surgical recovery to chronic condition management.

You'll have a dedicated care coordinator managing the plan and keeping your family updated, so nothing falls through the cracks.

Most insurance plans cover part or all of home nursing services — we'll help you find out.`,
        ctaButton: 'Check Your Coverage',
        whyItWorks: 'Provides concrete credibility markers (licensing, vetting, insurance) to answer safety concerns.'
      },
      {
        id: 'nursing-ad-v3',
        versionName: 'Version 3 — Storytelling Angle (Family Journey)',
        headline: "Michael Couldn't Be There Every Day. His Mother's Care Team Was.",
        primaryText: `After his mother's hip surgery, Michael faced the same decision thousands of families face: a facility, informal family care, or professional help at home.

He chose home nursing — and for the first time in weeks, stopped worrying every time his phone rang.

His mother recovered in the home she loves, with a nurse she trusted and a coordinator keeping the whole family informed.`,
        ctaButton: 'Start the Conversation',
        whyItWorks: 'Gives prospects a relatable scenario to see themselves in.'
      }
    ],
    instagramCaption: {
      headline: "Guilt shouldn't be part of caregiving.",
      caption: `Licensed home nursing care for your parent — and a coordinator who actually keeps you in the loop.

Free consultation, no pressure.`,
      ctaButton: 'Learn More'
    },
    ctaLibrary: [
      'Book a Free Consultation',
      'Talk to a Care Coordinator',
      'Check Your Coverage',
      'Start the Conversation',
      'Get Care Started'
    ],
    skillsDemonstrated: [
      'Healthcare audience psychology',
      'Emotionally sensitive ad writing',
      'QUEST framework application',
      'Lead generation copywriting'
    ]
  },
  {
    id: 'smartwatch-ads',
    title: 'Smart Watch — Long Battery Differentiator Ad Campaign',
    category: 'ads',
    industry: 'Consumer Electronics',
    brandDescription: 'DTC fitness-focused smartwatch featuring 10+ day battery life and full health tracking at half the price of premium leaders.',
    pieceCount: '3 ad variations + Instagram caption',
    goal: 'Convert tech-curious buyers frustrated by daily charging routines.',
    frameworkUsed: 'AIDA (Attention, Interest, Desire, Action)',
    targetAudience: 'Health-conscious professionals aged 25–45 using connected devices',
    customerAvatar: {
      name: 'Marcus Chen (36)',
      role: 'Product Manager',
      frustration: 'Constantly forgets to charge his premium watch overnight and misses sleep tracking data.',
      dreamOutcome: 'A watch that tracks everything reliably without adding another daily charging chore.'
    },
    adVariations: [
      {
        id: 'watch-ad-v1',
        versionName: 'Version 1 — Emotional Angle (Frustration Hook)',
        headline: 'Forgot to Charge Your Smartwatch Again?',
        primaryText: `You wake up, check your sleep data, and it's blank — dead battery, again.

Our smartwatch tracks everything your premium one does, but lasts over 10 days on a single charge. No more missed data. No more nightly charging routine.

A smartwatch that actually keeps up with you.`,
        ctaButton: 'Shop Now',
        whyItWorks: 'Grabs attention with an instantly relatable daily annoyance.'
      },
      {
        id: 'watch-ad-v2',
        versionName: 'Version 2 — Logical Angle (Spec & Price Contrast)',
        headline: '10+ Days of Battery. Full Health Tracking. Half the Price.',
        primaryText: `Most premium smartwatches need charging every 18–24 hours. Ours lasts over 10 days on a single charge, without sacrificing accuracy on heart rate, sleep, or workout tracking.

Same core health data you rely on, without the nightly charging routine or the premium price tag.

See the full spec comparison and decide for yourself.`,
        ctaButton: 'Compare the Specs',
        whyItWorks: 'Presents clear spec & price value contrast that comparison-shoppers look for.'
      },
      {
        id: 'watch-ad-v3',
        versionName: 'Version 3 — Storytelling Angle (Daily Convenience)',
        headline: "Marcus Kept Missing His Sleep Data. Here's What Fixed It.",
        primaryText: `Marcus loved tracking his health data — when his smartwatch actually had battery for it. Forgetting to charge overnight meant missing sleep data more often than not.

Switching to a watch with 10+ day battery life solved the problem entirely — no more remembering to charge every single night.

Now his data is just there, every morning, without fail.`,
        ctaButton: 'Get Yours Today',
        whyItWorks: 'Demonstrates a relatable buyer solving a friction point.'
      }
    ],
    instagramCaption: {
      headline: '10+ days of battery. Zero charging anxiety.',
      caption: `Full health and fitness tracking, without the nightly charging routine.

Launch pricing available now.`,
      ctaButton: 'Shop Now'
    },
    ctaLibrary: [
      'Shop Now',
      'Compare the Specs',
      'Get Yours Today',
      'See the Difference',
      'Claim Launch Pricing'
    ],
    skillsDemonstrated: [
      'Feature-to-benefit translation',
      'Comparison-shopper copywriting',
      'Direct-response positioning',
      'AIDA Framework Application'
    ]
  },
  {
    id: 'charity-bottle-ads',
    title: 'Charity Water Bottle — Transparent Impact Social Ads',
    category: 'ads',
    industry: 'Charity / Purpose-Driven eCommerce',
    brandDescription: 'Purpose-driven eCommerce brand selling reusable water bottles where every purchase funds 30 days of clean water access.',
    pieceCount: '3 ad variations + Instagram caption',
    goal: 'Convert socially conscious consumers into buyers through transparent impact numbers.',
    frameworkUsed: 'QUEST & Radical Transparency',
    targetAudience: 'Environmentally and socially conscious consumers aged 22–40',
    customerAvatar: {
      name: 'Emily Carter (27)',
      role: 'Nonprofit Program Coordinator',
      frustration: "Has been burned before by cause-marketing brands with vague 'giving back' claims.",
      dreamOutcome: 'Feel confident her everyday purchases are genuinely making a measurable difference.'
    },
    adVariations: [
      {
        id: 'bottle-ad-v1',
        versionName: 'Version 1 — Emotional Angle (Purpose Realized)',
        headline: '"A Portion of Proceeds" Doesn\'t Mean Anything Anymore. Here\'s What Does.',
        primaryText: `You've seen the vague claims before — 'giving back,' 'a portion of proceeds' — with no real specifics behind them.

Every bottle we sell funds a named, trackable clean water project. Not a fund. Not a promise. A specific project you can actually see progress on.

A purchase you can feel genuinely good about.`,
        ctaButton: 'See the Current Project',
        whyItWorks: 'Directly acknowledges consumer skepticism to build immediate trust.'
      },
      {
        id: 'bottle-ad-v2',
        versionName: 'Version 2 — Logical Angle (Verifiable Math)',
        headline: 'One Bottle. One Tracked Project. Real Impact.',
        primaryText: `Each bottle funds $8 toward a specific, named clean water project — and we publish progress updates so you can see exactly what your purchase supported.

No vague percentages. No unclear funds. Just transparent, trackable impact tied to a premium, well-designed bottle you'll actually use daily.

See the current project and its progress before you buy.`,
        ctaButton: 'View Project Progress',
        whyItWorks: 'Replaces abstract goodwill with concrete, verifiable numbers.'
      },
      {
        id: 'bottle-ad-v3',
        versionName: 'Version 3 — Storytelling Angle (Buyer Shift)',
        headline: "Emily Stopped Trusting 'Giving Back' Brands. This One Changed That.",
        primaryText: `After one too many vague 'a portion of proceeds' claims that led nowhere she could verify, Emily had mostly given up on cause-marketing products.

Then she found a brand that named the exact project her purchase funded — and showed progress updates as it happened.

Her water bottle isn't just a purchase anymore. It's something she can actually point to.`,
        ctaButton: 'Shop With Purpose',
        whyItWorks: 'Models the exact skepticism-to-trust journey of the target buyer.'
      }
    ],
    instagramCaption: {
      headline: 'Tired of vague giving-back claims? So were we.',
      caption: `Every bottle funds a specific, trackable clean water project — see exactly what it supports.

Premium design. Radical transparency.`,
      ctaButton: 'See the Impact'
    },
    ctaLibrary: [
      'See the Current Project',
      'View Project Progress',
      'Shop With Purpose',
      'See the Impact',
      'Fund Clean Water Today'
    ],
    skillsDemonstrated: [
      'Cause-marketing copywriting with transparency focus',
      'Objection handling for skeptical buyers',
      'Values-driven messaging',
      'QUEST Framework Application'
    ]
  },
  {
    id: 'english-course-ads',
    title: 'English Learning Course — Spoken Fluency Meta Ads',
    category: 'ads',
    industry: 'Education / EdTech',
    brandDescription: 'Online spoken English course built for adult professionals who understand grammar but freeze when speaking in meetings or interviews.',
    pieceCount: '3 ad variations + Instagram caption',
    goal: 'Enroll adult non-native speakers seeking career-driven spoken fluency.',
    frameworkUsed: '4Ps (Picture, Promise, Prove, Push)',
    targetAudience: 'Adult professionals (22–40) needing confident workplace English',
    customerAvatar: {
      name: 'Farhan Qureshi (27)',
      role: 'Junior Accountant',
      frustration: 'Understands written English well but freezes up or over-thinks sentences when speaking out loud.',
      dreamOutcome: 'Speak fluently and naturally enough in meetings and interviews without mental delay.'
    },
    adVariations: [
      {
        id: 'english-ad-v1',
        versionName: 'Version 1 — Emotional Angle (Diagnostic Hook)',
        headline: "You Understand English. You Just Freeze When It's Time to Speak.",
        primaryText: `You read the emails fine. You understand every word in the meeting. But when it's your turn to speak, something locks up.

That's not a vocabulary problem — it's a practice problem. Our course is built specifically around real, structured speaking practice, so fluency finally moves from your head to your mouth.

Try your first class free and feel the difference.`,
        ctaButton: 'Start Speaking Confidently',
        whyItWorks: 'Diagnoses the exact pain point (freezing vs vocabulary) for instant self-recognition.'
      },
      {
        id: 'english-ad-v2',
        versionName: 'Version 2 — Logical Angle (Why Apps Failed)',
        headline: 'Why Apps Never Actually Made You Fluent',
        primaryText: `Vocabulary apps train recognition — being able to understand a word when you see it. They don't train real-time recall, which is what speaking actually requires.

Our course is built around structured speaking practice with real feedback, so you build the specific skill that apps skip entirely.

Most learners notice a measurable difference in speaking confidence within the first few weeks.`,
        ctaButton: 'See How It Works',
        whyItWorks: 'Explains the mechanism (recall vs recognition) to resolve past-failure skepticism.'
      },
      {
        id: 'english-ad-v3',
        versionName: 'Version 3 — Storytelling Angle (Workplace Transformation)',
        headline: 'Farhan Understood English Fine. Speaking It Was the Problem.',
        primaryText: `Farhan could read reports and write emails in English without issue. The moment a meeting required him to speak up, his mind would go blank.

After a few weeks of structured speaking practice — not more vocabulary lists — the hesitation started to disappear.

Three months later, he led his first client call entirely in English.`,
        ctaButton: 'Start Your First Class Free',
        whyItWorks: 'Ties speaking fluency directly to career outcomes.'
      }
    ],
    instagramCaption: {
      headline: "Your English isn't the problem. How you practise it is.",
      caption: `Real speaking practice, built for professionals who freeze in meetings, not classrooms.

First class free — no pressure.`,
      ctaButton: 'Try It Free'
    },
    ctaLibrary: [
      'Start Speaking Confidently',
      'See How It Works',
      'Start Your First Class Free',
      'Try It Free',
      'Book Your Free Trial Lesson'
    ],
    skillsDemonstrated: [
      '4Ps Framework Application',
      'Career-driven messaging',
      'Past-failure objection reframing',
      'Outcome-based positioning'
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'email-copy',
    title: 'Email Copywriting',
    description: 'Welcome series, nurture flows, promotional pushes, and re-engagement campaigns engineered around a single objective and clear reader next step.',
    benefit: 'Higher engagement, trust-building, and consistent list conversion.',
    iconName: 'Mail'
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads Copy (Facebook & Instagram)',
    description: 'Full-funnel ad creative copy — headlines, primary text, hooks, and CTAs tailored to stop the scroll and test distinct emotional & logical angles.',
    benefit: 'Better click-through rates and clear angle performance insights.',
    iconName: 'Target'
  },
  {
    id: 'website-copy',
    title: 'Website Copy',
    description: 'Clear, concise website messaging that articulates who you serve, what problem you solve, and why readers should choose your solution.',
    benefit: 'Clarity across homepages, about pages, and service offerings.',
    iconName: 'Layout'
  },
  {
    id: 'landing-pages',
    title: 'Landing Page Copy',
    description: 'Conversion-focused page layouts and persuasive copy that guide visitors from curiosity to action without confusing fluff.',
    benefit: 'Higher page conversion rate for specific offers and campaigns.',
    iconName: 'FileText'
  },
  {
    id: 'sales-copy',
    title: 'Sales Copy',
    description: 'Thoughtful, long-form and short-form sales copy that addresses customer hesitations, presents value, and makes taking action feel natural.',
    benefit: 'Friction-free progression from reader interest to purchase.',
    iconName: 'ShoppingBag'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Copywriting Capabilities',
    items: [
      'Email Copywriting',
      'Meta (Facebook & Instagram) Ads Copy',
      'Audience & Customer Research',
      'Customer Psychology',
      'Persuasive Writing',
      'Marketing Copy',
      'Content & Message Design'
    ]
  },
  {
    title: 'Strategic Principles & Mindset',
    items: [
      'Conversion-Focused Writing',
      'Clear & Honest Communication',
      'Objection Identification & Reframing',
      'Thoughtful Value Positioning',
      'Continuous Skill Development',
      'Research-Driven Angle Generation'
    ]
  }
];

export const FRAMEWORKS: FrameworkItem[] = [
  {
    name: 'AIDA',
    fullName: 'Attention — Interest — Desire — Action',
    structure: 'Attention, Interest, Desire, Action',
    bestUsedFor: 'Welcome sequences, trial funnels, and fast-moving product decisions where trust is established prior to asking for action.'
  },
  {
    name: 'PAS',
    fullName: 'Problem — Agitate — Solution',
    structure: 'Problem, Agitate, Solution',
    bestUsedFor: 'Educational and problem-first ads where readers already sense a frustration and need it named and resolved quickly.'
  },
  {
    name: 'BAB',
    fullName: 'Before — After — Bridge',
    structure: 'Before, After, Bridge',
    bestUsedFor: 'Habit-interruption and lifestyle offers where contrasting current state against a better outcome creates natural momentum.'
  },
  {
    name: 'QUEST',
    fullName: 'Qualify — Understand — Educate — Stimulate — Transition',
    structure: 'Qualify, Understand, Educate, Stimulate, Transition',
    bestUsedFor: 'High-trust, considered decisions (e.g. healthcare, insurance, charity) where skepticism needs step-by-step reassurance.'
  },
  {
    name: '4Ps',
    fullName: 'Picture — Promise — Prove — Push',
    structure: 'Picture, Promise, Prove, Push',
    bestUsedFor: 'Transformation and identity-driven offers where the reader visualizes the outcome before reviewing concrete proof.'
  }
];
