import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

const ExamQuestions = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [showAnswers, setShowAnswers] = useState({});

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleAnswer = (questionId) => {
    setShowAnswers(prev => ({...prev, [questionId]: !prev[questionId]}));
  };

  const readings = [
    // === SAMPLE EXAM SECTION ===
    {
      title: "Practice Exam: Sample Questions",
      questions: [
        {
          id: "sample1",
          question: "1. Why use external representation?",
          type: "multiple-choice",
          options: [
            "(a) It allows us to surpass the limitations of our own internal cognition",
            "(b) It allows us to encode visual representations of data",
            "(c) It lets us confirm that the visualization provides insight",
            "(d) It allows us to understand the requirements of a problem"
          ],
          answer: "(a) It allows us to surpass the limitations of our own internal cognition",
          explanation: "External representations offload mental work (cognition) to our perceptual system, helping us overcome the limits of our memory and processing power. This is a core reason visualization works."
        },
        {
          id: "sample2",
          question: "2. Which of the following are abstractions/levels in the nested model of visualization design and evaluation? (Select all that apply)",
          type: "multiple-select",
          options: [
            "(a) Domain",
            "(b) Visualization",
            "(c) Data",
            "(d) Attribute",
            "(e) Task",
            "(f) Idiom",
            "(g) Interface",
            "(h) Algorithm"
          ],
          answer: "(a) Domain, (c) Data, (e) Task, (f) Idiom, (h) Algorithm",
          explanation: "The nested model consists of four main levels: Domain situation, Data/Task abstraction, Idiom (visual encoding/interaction), and Algorithm. Data and Task are often considered together at the abstraction level."
        },
        {
          id: "sample3",
          question: "3. In the nested design model, what is the idiom abstraction?",
          type: "multiple-choice",
          options: [
            "(a) It is how you create the visualization's interactions",
            "(b) It is the approach to generating the requirements of a problem",
            "(c) It is the way you identify the data statistics",
            "(d) It is how you create and manipulate the visual representations of the data"
          ],
          answer: "(d) It is how you create and manipulate the visual representations of the data",
          explanation: "The idiom is the 'how' of the visualization design. It specifies the visual encoding (marks and channels) and the interaction techniques used to represent and manipulate the data."
        },
        {
          id: "sample4",
          question: "4. What are the 'semantics' of a dataset?",
          type: "multiple-choice",
          options: [
            "(a) The real-world meaning of the data attributes",
            "(b) The position of the data attributes in an array",
            "(c) The numeric meaning of the data attributes",
            "(d) The numeric representation of the data attributes"
          ],
          answer: "(a) The real-world meaning of the data attributes",
          explanation: "Semantics refers to what the data actually means in a real-world context (e.g., this column of numbers represents 'temperature in Celsius' or 'price in USD')."
        },
        {
          id: "sample5",
          question: "5. What does it mean to 'derive data'?",
          type: "multiple-choice",
          options: [
            "(a) To import new data",
            "(b) The addition of graphical (or textual) annotations",
            "(c) To save or capture visualization elements as persistent artifacts",
            "(d) To produce new data elements based on existing data elements"
          ],
          answer: "(d) To produce new data elements based on existing data elements",
          explanation: "Deriving data is transforming or computing new attributes from the original data. For example, calculating an 'average' from a list of numbers or a 'profit' column from 'revenue' and 'cost' columns."
        },
        {
          id: "sample6",
          question: "6. The effectiveness of a data visualization can be impacted by: (Select all that apply)",
          type: "multiple-select",
          options: [
            "(a) Choosing appropriate visual encodings for the data and task",
            "(b) Choosing appropriate task(s) for the target users",
            "(c) Choosing appropriate interactions for your interface modality"
          ],
          answer: "(a), (b), (c)",
          explanation: "Effectiveness is a holistic measure. It depends on the entire pipeline: having the right task for the user, and then choosing the right visual encodings and interactions to support that task."
        },
        {
          id: "sample7",
          question: "7. Matching the channel type to the data type is an example of:",
          type: "multiple-choice",
          options: [
            "(a) External representation",
            "(b) The effectiveness principle",
            "(c) The expressiveness principle",
            "(d) Marks and channels"
          ],
          answer: "(c) The expressiveness principle",
          explanation: "The expressiveness principle states that the visual encoding should express all of, and only, the information in the data. This includes matching the channel properties (e.g., ordered vs. categorical) to the data attribute properties."
        },
        {
          id: "sample8",
          question: "8. For the choropleth map of US unemployment, select the marks and channels in the visualization. (Circle all that apply)",
          type: "multiple-select",
          options: [
            "mark: point",
            "mark: line",
            "mark: area",
            "channels: x and y position",
            "channel: color luminance",
            "channel: color hue"
          ],
          answer: "mark: area, channels: x and y position, and channel: color luminance",
          explanation: "Each state is an 'area' mark. Its position is given by its geography. The unemployment rate (an ordered, quantitative attribute) is encoded using color luminance (light to dark blue)."
        },
        {
          id: "sample9",
          question: "9. For the scatterplot of sepal width vs. sepal length, select the marks and channels. (Select all that apply)",
          type: "multiple-select",
          options: [
            "mark: point",
            "mark: line",
            "mark: area",
            "channels: x and y position",
            "channel: size",
            "channel: shape",
            "channel: color luminance",
            "channel: color hue"
          ],
          answer: "mark: point, channels: x and y position, channel: shape, and channel: color hue",
          explanation: "Each data item is a 'point' mark. Sepal length and width are encoded by x and y position. The species (a categorical attribute) is encoded using both color hue (blue, orange, green) and shape (circle, plus, diamond)."
        },
        {
          id: "sample10",
          question: "10. What is a glyph?",
          type: "multiple-choice",
          options: [
            "(a) A combination of a mark and channels",
            "(b) A composite mark made up of multiple marks",
            "(c) Showing a data point as a single 'unit', like in small multiples",
            "(d) Combining multiple data points together"
          ],
          answer: "(b) A composite mark made up of multiple marks",
          explanation: "A glyph is a complex mark composed of multiple simpler marks. For example, a single stacked bar in a stacked bar chart can be considered a glyph made up of several line or area segments."
        },
        {
          id: "sample11",
          question: "11. What is one advantage, and one disadvantage of using animation in a visualization? (Short answer)",
          type: "short-answer",
          answer: "Advantage: It's intuitive and good for showing overall trends/patterns. Disadvantage: Changes can be hard to track precisely, and it relies on the user's memory ('Eyes over memory!') to compare non-adjacent states.",
          explanation: "Animation is engaging but often less effective for precise analytical comparisons than static alternatives like small multiples."
        },
        {
          id: "sample12",
          question: "12. What is the visual information seeking mantra?",
          type: "short-answer",
          answer: "Overview first, zoom and filter, then details on demand.",
          explanation: "This is a famous design principle by Ben Shneiderman that guides the creation of effective exploratory visualization interfaces."
        },
        {
          id: "sample13",
          question: "13. How many keys are shown in a scatter plot?",
          type: "multiple-choice",
          options: [
            "(a) Zero",
            "(b) One",
            "(c) Two",
            "(d) Three"
          ],
          answer: "(a) Zero",
          explanation: "A standard scatterplot visualizes only values (two quantitative attributes). There is no key attribute that uniquely identifies each point's mark, unlike a bar chart where the category is the key."
        },
        {
          id: "sample14",
          question: "14. A progress bar providing feedback about a long operation would be an example of:",
          type: "multiple-choice",
          options: [
            "(a) Overview+detail",
            "(b) Linked highlighting",
            "(c) User interface",
            "(d) Responsive design"
          ],
          answer: "(d) Responsive design",
          explanation: "Responsive design is about providing appropriate system feedback for every user action. A progress bar is the appropriate feedback for a multi-second or longer operation to show the system is working."
        },
        {
          id: "sample15",
          question: "15. For the provided car dataset: <br>15.1: What is the dataset type? Is it streaming or static?<br>15.2: What is the attribute type and scale/cardinality for each of the four attributes?",
          type: "short-answer",
          answer: "15.1: Tabular, Static. <br>15.2: car: type = categorical, cardinality = 9. <br>color: type = categorical, cardinality = 7. <br>Year: type = ordered, quantitative, sequential, cardinality/scale = 19 (from 1997 to 2016). <br>MPG: type = ordered, ordinal, sequential, cardinality/scale = 4 (Excellent, Good, Average, Bad).",
          explanation: "This tests your ability to perform a basic data abstraction on a simple tabular dataset."
        },
        {
          id: "sample16",
          question: "16. The earliest data visualizations belonged to:",
          type: "multiple-choice",
          options: [
            "(a) Diagrams of the flow of trade within and between empires",
            "(b) Statistical graphs of tabular data",
            "(c) Plotting proto-algorithms in Ancient Babylonia",
            "(d) Cartography and map making"
          ],
          answer: "(d) Cartography and map making",
          explanation: "As described in Friendly's history, the earliest roots of visualization are found in map making for navigation and astronomical charts for plotting celestial positions."
        },
        {
          id: "sample17",
          question: "17. In 2-3 paragraphs, briefly summarize or describe two of the historical epochs of data visualization as described in Friendly’s A Brief History of Data Visualization.",
          type: "short-answer",
          answer: "One major epoch is the **'Golden Age of Statistical Graphics' (1850-1900)**. This period saw an explosion of innovation and exquisitely crafted visualizations. It was fueled by the establishment of official state statistical offices, which provided large, rich datasets on topics like population, trade, and social issues ('moral statistics'). Key figures like Charles Joseph Minard created masterpieces such as his flow map of Napoleon's Russian campaign, and governments like France and the U.S. produced comprehensive statistical atlases. These works combined multiple graphic forms, used color effectively, and demonstrated a sophisticated understanding of how to communicate complex information visually.<br><br>Another contrasting epoch is the **'Modern Dark Ages' (1900-1950)**. During this time, the enthusiasm for visualization waned significantly within the statistical community. The focus shifted towards quantification and the development of formal, mathematical models that prized numerical precision. Visualizations were often seen as mere 'pictures'—pretty, but not suitable for rigorous analysis. While graphical methods became more standardized and appeared in textbooks and business, there were very few new graphical inventions or innovations. This period represented a dormancy in creativity, which was only broken by the 'rebirth' of visualization led by figures like John W. Tukey in the post-1950 era.",
          explanation: "This question tests your understanding of the major periods and themes in the history of data visualization. A good answer will name the epochs and describe their key characteristics and drivers."
        },
        {
          id: "sample18",
          question: "18. For storytelling with visualizations, a designer can balance between 'author driven' vs. 'reader driven' stories. Discuss some of the tradeoffs and benefits/drawbacks between these approaches.",
          type: "short-answer",
          answer: "**Author-driven** stories offer a linear narrative with heavy messaging and low interactivity. The main benefit is that they can communicate a specific, clear message to a broad audience effectively, ensuring the main point is not missed. The primary drawback is the lack of user agency; it prevents exploration and discovery of other potential insights in the data.<br><br>**Reader-driven** stories have no prescribed order and offer free interactivity. Their benefit is empowerment; they are excellent for expert users who want to perform their own analysis and discover their own insights. The main drawback is that they can be overwhelming for novice users, who may not know where to start. Furthermore, without guidance, the key message intended by the author can be easily missed.",
          explanation: "This question requires you to synthesize content from the storytelling lecture, specifically the slide showing the spectrum from author-driven (like a slideshow) to reader-driven (like a drill-down dashboard) structures."
        }
      ]
    },
    // The rest of the sections follow, with complete answers as requested...
    {
      title: "Reading 1: Visualization Rhetoric by Hullman & Diakopoulos",
      questions: [
        {
          id: "rhet1",
          question: "What is the central argument of the 'visualization rhetoric' framework presented in the paper?",
          type: "multiple-choice",
          options: [
            "(a) Visualizations should always be objective and free from any form of persuasive bias.",
            "(b) Design techniques inevitably prioritize certain interpretations, and this persuasive aspect can be analyzed and understood.",
            "(c) Exploratory visualization is superior to communicative visualization because it avoids rhetoric.",
            "(d) Rhetoric is a negative framing effect that designers must eliminate by providing full data provenance."
          ],
          answer: "(b) Design techniques inevitably prioritize certain interpretations, and this persuasive aspect can be analyzed and understood.",
          explanation: "The core argument is that rhetoric is an inherent, analyzable aspect of visualization design used to communicate an intended story, not simply a negative bias to be eliminated."
        },
        {
          id: "rhet2",
          question: "The authors identify four 'editorial layers' where rhetorical choices are made. Which of the following is NOT one of those layers?",
          type: "multiple-choice",
          options: [
            "(a) Data",
            "(b) Visual Representation",
            "(c) Algorithm",
            "(d) Interactivity",
            "(e) Textual Annotations"
          ],
          answer: "(c) Algorithm",
          explanation: "The four editorial layers discussed are Data, Visual Representation, Textual Annotations, and Interactivity. 'Algorithm' is a level in other models (like the nested model) but not one of the rhetorical layers defined here."
        },
        {
          id: "rhet3",
          question: "In the context of semiotics, what does 'connotation' refer to?",
          type: "multiple-choice",
          options: [
            "(a) The direct, literal, and descriptive meaning of a visual element.",
            "(b) The process of removing outliers from a dataset before visualization.",
            "(c) A secondary, implied meaning that is cued by a visual element with reference to cultural codes.",
            "(d) The layer of interactivity that constrains a user's exploration of the data."
          ],
          answer: "(c) A secondary, implied meaning that is cued by a visual element with reference to cultural codes.",
          explanation: "Connotation is the implicit, culturally-embedded meaning, as opposed to denotation, which is the literal meaning."
        },
        {
          id: "rhet4",
          question: "The 'Poll Dancing' visualization is used as a key example. The vertical representation of the central 'pole' as the zero-error line is an example of:",
          type: "multiple-choice",
          options: [
            "(a) Connotation",
            "(b) Provenance Rhetoric",
            "(c) Denotation",
            "(d) Procedural Rhetoric"
          ],
          answer: "(c) Denotation",
          explanation: "The line literally and directly represents the value of zero error. The 'pole dancing' idea it evokes is the connotation."
        },
        {
          id: "rhet5",
          question: "Citing data sources, providing methodological notes, and annotating corrections are examples of which class of rhetorical technique?",
          type: "multiple-choice",
          options: [
            "(a) Mapping Rhetoric",
            "(b) Information Access Rhetoric",
            "(c) Linguistic-based Rhetoric",
            "(d) Provenance Rhetoric"
          ],
          answer: "(d) Provenance Rhetoric",
          explanation: "Provenance rhetoric techniques are used to signal the trustworthiness and transparency of the visualization's sources and methods."
        },
        {
          id: "rhet6",
          question: "'Procedural Rhetoric' refers to the expression of meaning through:",
          type: "multiple-choice",
          options: [
            "(a) The choice of color and visual metaphor.",
            "(b) Rule-based representations and interactive functions that guide the user.",
            "(c) The inclusion of ironic or sarcastic textual annotations.",
            "(d) The way data is aggregated or simplified before being visualized."
          ],
          answer: "(b) Rule-based representations and interactive functions that guide the user.",
          explanation: "Procedural rhetoric uses the structure of the interaction itself (e.g., default views, available filters, animations) to shape the user's interpretation."
        },
        {
          id: "rhet7",
          question: "Omitting certain variables or filtering data to simplify a message is an example of which rhetorical operation?",
          type: "multiple-choice",
          options: [
            "(a) Metonymy",
            "(b) Omission",
            "(c) Redundancy",
            "(d) Contrast"
          ],
          answer: "(b) Omission",
          explanation: "Omission is a technique of Information Access Rhetoric where choices are made to exclude or hide certain information to simplify a message or focus attention."
        },
        {
          id: "rhet8",
          question: "According to the paper, how do 'viewing codes' influence interpretation?",
          type: "multiple-choice",
          options: [
            "(a) They are explicit instructions provided by the designer on how to read the chart.",
            "(b) They are programming libraries that render the visualization.",
            "(c) They are implicit, often internalized standards (cultural, perceptual) that a viewer uses to interpret a visualization.",
            "(d) They are security protocols that limit access to the underlying data."
          ],
          answer: "(c) They are implicit, often internalized standards (cultural, perceptual) that a viewer uses to interpret a visualization.",
          explanation: "Viewing codes are the cultural and individual lenses (e.g., how to read a chart, cultural associations with colors) that a user brings to the visualization."
        },
        {
          id: "rhet9",
          question: "Briefly define the difference between denotation and connotation in the context of visualization rhetoric.",
          type: "short-answer",
          answer: "Denotation is the literal, descriptive meaning of a sign (e.g., a bar's height represents a specific value). Connotation is the secondary, culturally-embedded meaning that is implied by the sign or its context (e.g., a line graph connotes a temporal trend, even with non-temporal data).",
          explanation: "Denotation is what is explicitly shown; connotation is what is implicitly suggested."
        },
        {
          id: "rhet10",
          question: "The paper describes several classes of rhetorical techniques. Name three of these classes and provide one specific technique as an example for each.",
          type: "short-answer",
          answer: "Possible answers include: 1. Information Access Rhetoric (e.g., Omission, Metonymy), 2. Provenance Rhetoric (e.g., Citing data sources), 3. Mapping Rhetoric (e.g., Visual metaphor, Redundancy), 4. Linguistic-based Rhetoric (e.g., Irony), 5. Procedural Rhetoric (e.g., Anchoring).",
          explanation: "These classes provide a framework for analyzing the different ways a design can persuade or guide interpretation."
        },
        {
          id: "rhet11",
          question: "What is an 'anchoring' technique in procedural rhetoric, and how does it influence a user's interpretation?",
          type: "short-answer",
          answer: "Anchoring directs a user's attention to a specific starting point, such as a default view or a fixed comparison. It influences interpretation by framing the initial context and encouraging the user to look for trends relative to that specific anchor, rather than exploring all possible comparisons freely.",
          explanation: "The default view of a visualization is a powerful anchor because it sets the initial stage for interpretation."
        },
        {
          id: "rhet12",
          question: "How does the paper's perspective on 'rhetoric' in visualization differ from the more traditional InfoVis view of 'bias'?",
          type: "short-answer",
          answer: "The traditional view often treats 'bias' as a negative, a systematic error to be eliminated in pursuit of pure objectivity. This paper treats 'rhetoric' more neutrally, as an unavoidable and inherent part of communication design that shapes meaning, and which can be used effectively for communicative goals.",
          explanation: "The shift is from viewing persuasion as an error to viewing it as a feature of communication."
        },
        {
          id: "rhet13",
          question: "The authors argue that visualization rhetoric can have positive effects. Briefly explain this viewpoint.",
          type: "short-answer",
          answer: "Rhetoric can be used positively to create engaging, layered, and effective narrative visualizations. By intentionally guiding the user's focus and cueing specific interpretations, a designer can tell a compelling story and communicate insights more effectively than a purely objective, exploratory interface might allow.",
          explanation: "Effective storytelling often requires a degree of authorial intent and guidance, which is a form of rhetoric."
        },
        {
          id: "rhet14",
          question: "In the 'How the Recession Changed Us' example (Fig. 1), the authors state that the graphic relies on assumed user knowledge. What rhetorical technique does this represent?",
          type: "multiple-choice",
          options: [
            "(a) Metaphor",
            "(b) Omission based on knowledge assumptions",
            "(c) Procedural anchoring",
            "(d) Redundancy"
          ],
          answer: "(b) Omission based on knowledge assumptions",
          explanation: "The visualization omits the explicit clauses linking 'uncertainty in the NYT' to the recession, assuming the user will make that connection on their own."
        },
        {
            id: "rhet15",
            question: "Which of the following are examples of Mapping Rhetoric? (Select all that apply)",
            type: "multiple-select",
            options: [
              "(a) Using a visually confusing graphic to imply a policy is confusing",
              "(b) Citing the source of the data in a footnote",
              "(c) Using a 'down is bad' spatial mapping",
              "(d) Providing a search bar to filter the data",
              "(e) Repeating a label like 'Higher prices' multiple times"
            ],
            answer: "(a), (c), (e)",
            explanation: "Mapping rhetoric relates to the data-to-visual transfer function. Visual noise (a), visual metaphors (c), and redundancy (e) are all examples. Citing sources is Provenance Rhetoric, and a search bar is Procedural Rhetoric."
        }
      ]
    },
    // === READING 2 ===
    {
        title: "Reading 2: A Brief History of Data Visualization by Friendly",
        questions: [
          {
            id: "hist1",
            question: "According to Friendly, who is widely considered the inventor of most of the graphical forms we use today, including the line graph and bar chart?",
            type: "multiple-choice",
            options: [
              "(a) Charles Joseph Minard",
              "(b) John Snow",
              "(c) William Playfair",
              "(d) John W. Tukey"
            ],
            answer: "(c) William Playfair",
            explanation: "William Playfair is credited with inventing the line graph, bar chart, and pie chart in the late 1700s and early 1800s."
          },
          {
            id: "hist2",
            question: "Friendly characterizes the period from 1850-1900 as the 'Golden Age' of statistical graphics. This era was marked by:",
            type: "multiple-choice",
            options: [
              "(a) The invention of the first computer-generated graphics.",
              "(b) A decline in visualization innovation due to the rise of formal statistical models.",
              "(c) Unparalleled beauty and innovation, including Minard's flow maps and the first comprehensive statistical atlases.",
              "(d) The first-ever use of coordinate systems in map-making."
            ],
            answer: "(c) Unparalleled beauty and innovation, including Minard's flow maps and the first comprehensive statistical atlases.",
            explanation: "The 'Golden Age' saw an explosion of innovation and high-quality production in data graphics, spurred by the availability of official state statistics."
          },
          {
            id: "hist3",
            question: "The period from 1900-1950 is referred to as the 'modern dark ages' of visualization because:",
            type: "multiple-choice",
            options: [
              "(a) The technology for color printing was lost.",
              "(b) Enthusiasm for visualization was largely supplanted by a focus on formal, numerical statistical models.",
              "(c) There was no interesting data to visualize during this period.",
              "(d) All major graphical forms had already been invented, leaving no room for innovation."
            ],
            answer: "(b) Enthusiasm for visualization was largely supplanted by a focus on formal, numerical statistical models.",
            explanation: "During this period, the statistical community prioritized precise, formal models, viewing graphical methods as merely illustrative rather than analytical, which led to a lull in innovation."
          },
          {
            id: "hist4",
            question: "Charles Joseph Minard's famous 1869 chart of Napoleon's march on Moscow is a prime example of what type of visualization?",
            type: "multiple-choice",
            options: [
              "(a) A dot map",
              "(b) A flow map",
              "(c) A polar area chart",
              "(d) A scatterplot"
            ],
            answer: "(b) A flow map",
            explanation: "The chart uses flow lines on a map, with the width of the lines proportional to a quantity (the size of the army), to show movement and attrition over geography."
          },
          {
            id: "hist5",
            question: "The 'Re-birth of data visualization' (1950-1975) was spurred by key figures like John W. Tukey. Tukey is most associated with:",
            type: "multiple-choice",
            options: [
              "(a) The theory of semiology in graphics.",
              "(b) The invention of the first government statistical atlases.",
              "(c) The development of Exploratory Data Analysis (EDA) and inventions like the boxplot.",
              "(d) The first use of isolines on maps."
            ],
            answer: "(c) The development of Exploratory Data Analysis (EDA) and inventions like the boxplot.",
            explanation: "John W. Tukey championed EDA, an approach that uses graphical methods to explore data, and invented many foundational plot types like the boxplot and stem-and-leaf plot."
          },
          {
            id: "hist6",
            question: "Dr. John Snow's 1855 map of cholera deaths in London was a landmark graphic because:",
            type: "multiple-choice",
            options: [
              "(a) It was the first map to use color to represent data.",
              "(b) It used graphical analysis to pinpoint the source of a disease outbreak, founding modern epidemiology.",
              "(c) It was the first time a bar chart had been placed on a map.",
              "(d) It was drawn by a computer, demonstrating the power of new technology."
            ],
            answer: "(b) It used graphical analysis to pinpoint the source of a disease outbreak, founding modern epidemiology.",
            explanation: "By plotting individual deaths as dots, Snow was able to visually identify a cluster around the Broad Street pump, providing crucial evidence for the water-borne theory of cholera."
          },
          {
            id: "hist7",
            question: "Florence Nightingale used a novel visualization, which she called a 'coxcomb' (a form of polar area chart), to argue for what?",
            type: "multiple-choice",
            options: [
              "(a) The need for more funding for astronomical research.",
              "(b) The precise location of longitude at sea.",
              "(c) The link between crime rates and literacy.",
              "(d) The need for improved sanitary conditions in battlefield hospitals."
            ],
            answer: "(d) The need for improved sanitary conditions in battlefield hospitals.",
            explanation: "Her charts powerfully demonstrated that far more soldiers were dying from preventable diseases due to poor sanitation than from wounds in battle."
          },
          {
            id: "hist8",
            question: "In 2-3 paragraphs, briefly summarize or describe two historical epochs of data visualization as described in Friendly’s paper.",
            type: "short-answer",
            answer: "Example Answer: The 'Golden Age' (1850-1900) was a period of great innovation and beauty in statistical graphics. It was driven by the establishment of official state statistical offices, providing rich social and economic data. This era saw the creation of masterpieces like Charles Minard's flow maps and the extensive statistical atlases produced by governments like France and the U.S., which used a wide variety of advanced graphical techniques to present a 'graphic portrait of the nation.' In contrast, the 'Modern Dark Ages' (1900-1950) was a period of relative stagnation in visualization innovation. The focus in statistics shifted towards formal, mathematical models and numerical precision. Graphics were seen as mere illustrations, not tools for analysis. While graphical methods became more common in textbooks and commerce, there were few new graphical inventions or innovations. This period represented a dormancy in creativity, which was only broken by the 'rebirth' of visualization led by figures like John W. Tukey in the post-1950 era.",
            explanation: "The student should be able to name and write about two of the epochs, describing the key developments, figures, and overall theme of each period."
          },
          {
            id: "hist9",
            question: "What was William Playfair's primary motivation for creating graphical charts?",
            type: "short-answer",
            answer: "Playfair believed that graphs could 'speak to the eyes' and make complex data, like economic trends over time, easier to understand and compare than dense tables of numbers. He wanted to reveal shapes and proportions that were not obvious from tabular data alone.",
            explanation: "His goal was to leverage the power of visual perception to make quantitative information more accessible and understandable."
          },
          {
            id: "hist10",
            question: "What is 'statistical historiography' as defined by Friendly?",
            type: "multiple-choice",
            options: [
              "(a) The study of historical statistics.",
              "(b) The use of historical charts in modern statistical analysis.",
              "(c) Using modern visualization methods to analyze the history of visualization itself.",
              "(d) Writing a history of the Royal Statistical Society."
            ],
            answer: "(c) Using modern visualization methods to analyze the history of visualization itself.",
            explanation: "Friendly uses this term to describe the self-referential act of treating historical events and innovations in visualization as a dataset, which can then be analyzed and visualized to find patterns."
          },
          {
            id: "hist11",
            question: "Before the 18th century, the earliest forms of data visualization primarily came from which field?",
            type: "multiple-choice",
            options: [
              "(a) Economics",
              "(b) Cartography (map-making)",
              "(c) Political Science",
              "(d) Medicine"
            ],
            answer: "(b) Cartography (map-making)",
            explanation: "The earliest roots of visualization are in map-making for navigation and exploration, and in geometric diagrams for astronomy and surveying."
          },
          {
            id: "hist12",
            question: "Why was the development of centralized government data collection in the 1800s so important for the growth of thematic mapping?",
            type: "short-answer",
            answer: "It provided, for the first time, large, rich, and socially relevant datasets (e.g., crime statistics, literacy, poverty) that could be analyzed and displayed geographically. This moved thematic mapping beyond physical characteristics (like magnetism or altitude) into the social and human realm, creating a new field of 'moral statistics'.",
            explanation: "Data availability is a key driver of visualization innovation."
          },
          {
            id: "hist13",
            question: "The first visual representation of statistical data is believed to be a 1644 graph by Michael Florent van Langren. What data did this graph show?",
            type: "short-answer",
            answer: "It showed the wide variation in 12 different known estimates of the difference in longitude between the cities of Toledo and Rome.",
            explanation: "This graph is significant because it used a visual display to highlight the uncertainty and range of error in a set of measurements, a task for which graphics are uniquely suited."
          },
          {
            id: "hist14",
            question: "Which historical figure used multivariate weather charts with over 600 illustrations to discover the anti-cyclonic pattern of winds around low-pressure regions?",
            type: "multiple-choice",
            options: [
                "(a) Edmund Halley",
                "(b) William Playfair",
                "(c) Francis Galton",
                "(d) Charles Joseph Minard"
            ],
            answer: "(c) Francis Galton",
            explanation: "In his 1863 work 'Meteorographica', Francis Galton used ingenious trellis-style displays to analyze weather data, leading to this significant meteorological discovery through purely graphical methods."
          }
        ]
    },
    // === READING 3 ===
    {
      title: "Reading 3: Sketching designs using the Five Design-Sheet (FdS) methodology",
      questions: [
        {
          id: "fds1",
          question: "The Five Design-Sheet (FdS) methodology is primarily intended to structure what stage of the visualization process?",
          type: "multiple-choice",
          options: [
            "(a) Final implementation and coding.",
            "(b) Early-stage ideation, planning, and lo-fidelity prototyping.",
            "(c) User acceptance testing and evaluation.",
            "(d) Data cleaning and preprocessing."
          ],
          answer: "(b) Early-stage ideation, planning, and lo-fidelity prototyping.",
          explanation: "The FdS is a structured approach for the early 'idea space' and conceptualization stage, using sketching to explore alternatives before committing to code."
        },
        {
          id: "fds2",
          question: "The FdS methodology encourages a two-part creative process, starting with ________ thinking and shifting to ________ thinking.",
          type: "multiple-choice",
          options: [
            "(a) convergent; divergent",
            "(b) divergent; convergent",
            "(c) procedural; declarative",
            "(d) aesthetic; functional"
          ],
          answer: "(b) divergent; convergent",
          explanation: "The process begins with divergent thinking (generating many ideas in Sheet 1) and then moves to convergent thinking (selecting and refining three main ideas in Sheets 2-4 and a final idea in Sheet 5)."
        },
        {
          id: "fds3",
          question: "What is the primary purpose of Sheet 1 in the FdS methodology?",
          type: "multiple-choice",
          options: [
            "(a) To create a single, detailed realization plan for implementation.",
            "(b) To brainstorm many 'mini-ideas,' then filter, categorize, combine, and question them.",
            "(c) To present three complete and distinct alternative designs to a client.",
            "(d) To document the technical dependencies and algorithms of the final design."
          ],
          answer: "(b) To brainstorm many 'mini-ideas,' then filter, categorize, combine, and question them.",
          explanation: "Sheet 1 is the 'Ideation' sheet, structured with five parts to guide the user through a divergent thinking process of generating and organizing many initial concepts."
        },
        {
          id: "fds4",
          question: "In Sheets 2, 3, and 4, the 'Focus/Parti' section is meant for what?",
          type: "multiple-choice",
          options: [
            "(a) Listing the advantages and disadvantages of the design.",
            "(b) Sketching the overall layout of the entire user interface.",
            "(c) Describing the central, core concept or 'big idea' of that specific design.",
            "(d) Detailing the action-result pairs of the user interactions."
          ],
          answer: "(c) Describing the central, core concept or 'big idea' of that specific design.",
          explanation: "The 'Parti' (from architecture) is the central, pivotal concept that informs the entire design. This section is for detailing that core idea, either visually or textually."
        },
        {
          id: "fds5",
          question: "Which of the following are the five sections found on the design sheets (Sheets 2, 3, and 4)?",
          type: "multiple-select",
          options: [
            "(a) Information",
            "(b) Algorithm",
            "(c) Layout",
            "(d) Focus/Parti",
            "(e) Discussion",
            "(f) Operations"
          ],
          answer: "(a), (c), (d), (e), (f)",
          explanation: "The five sections are Information, Layout, Operations, Focus/Parti, and Discussion. 'Algorithm' details are typically reserved for the 'Detail' section of Sheet 5."
        },
        {
          id: "fds6",
          question: "On Sheet 5, the 'Realization' sheet, the 'Discussion' section is replaced by which section?",
          type: "multiple-choice",
          options: [
            "(a) Critique",
            "(b) Feasibility",
            "(c) Detail",
            "(d) Summary"
          ],
          answer: "(c) Detail",
          explanation: "Sheet 5 is the final plan for implementation, so the 'Discussion' of alternatives is replaced with a 'Detail' section for algorithms, dependencies, costs, etc."
        },
        {
          id: "fds7",
          question: "Why do the authors advocate for creating three distinct design alternatives (Sheets 2, 3, and 4)?",
          type: "short-answer",
          answer: "To explore the design space more fully and avoid converging on the first idea too quickly. Presenting three distinct alternatives facilitates better discussion with clients, allows for the combination of ideas, and helps ensure a more robust final solution is chosen.",
          explanation: "Too few designs limit exploration, while too many can be confusing. Three is presented as a practical balance."
        },
        {
          id: "fds8",
          question: "The first sheet of the FdS has five stages for ideation. Name at least four of these five stages.",
          type: "short-answer",
          answer: "Ideas, Filter, Categorize, Combine & Refine, and Question.",
          explanation: "These five stages guide the user from a broad brainstorm to a more refined set of potential concepts to develop further."
        },
        {
          id: "fds9",
          question: "Describe two benefits of using physical, lo-fidelity sketching for design, according to the paper.",
          type: "short-answer",
          answer: "1. It's fast and cheap, allowing for quick iteration and exploration of many ideas. 2. Its unfinished appearance is 'forgiving' and invites critique and discussion from clients or team members without them feeling like they are criticizing a finished, time-intensive product.",
          explanation: "Other valid answers include: it externalizes thoughts, provides a persistent record, and frees the designer from the constraints of software tools."
        },
        {
          id: "fds10",
          question: "What kind of information is intended to be captured in the 'Operations' section of an FdS design sheet?",
          type: "short-answer",
          answer: "The 'Operations' section captures the interactivity of the design as Action-Result pairs. It describes what happens when a user interacts with a component shown in the 'Layout' sketch (e.g., 'On button click -> data is filtered').",
          explanation: "This section connects the static visual layout to its dynamic, interactive behavior."
        },
        {
          id: "fds11",
          question: "The paper's evaluation using the System Usability Scale (SUS) found that the FdS methodology had what level of usability?",
          type: "multiple-choice",
          options: [
            "(a) Poor",
            "(b) Okay",
            "(c) Good",
            "(d) Excellent"
          ],
          answer: "(c) Good",
          explanation: "The average SUS score was 74.29, which corresponds to 'good' usability on the adjective scale presented by Bangor et al."
        },
        {
          id: "fds12",
          question: "According to the authors, in what type of project or system would the FdS methodology be less useful?",
          type: "short-answer",
          answer: "It would be less useful for simple systems that do not have a significant visual interface or complex interactions. For example, a command-line tool with a single input and a single output, where the complexity is in the algorithm, not the interface.",
          explanation: "The FdS thrives on designing visual layouts and interaction operations, so it is less applicable when those are not the primary design challenges."
        },
        {
          id: "fds13",
          question: "How might the FdS methodology help a designer apply the principles of 'Visualization Rhetoric'?",
          type: "short-answer",
          answer: "The FdS provides a structured way to explore different rhetorical strategies. A designer could use the three alternative designs (Sheets 2-4) to explicitly prototype different framing effects (e.g., one design uses anchoring, another uses a specific visual metaphor). The 'Discussion' section is a perfect place to analyze the potential rhetorical impact and persuasive goal of each design.",
          explanation: "By making design choices explicit and creating alternatives, FdS helps make the application of rhetoric intentional rather than accidental."
        },
        {
            id: "fds14",
            question: "In the teaching case study, the marks students received for their FdS coursework showed a strong correlation with what?",
            type: "multiple-choice",
            options: [
                "(a) Their programming ability only",
                "(b) Their final exam score",
                "(c) Their overall module average and masters qualification percentage",
                "(d) Their prior experience with graphic design"
            ],
            answer: "(c) Their overall module average and masters qualification percentage",
            explanation: "The FdS mark correlated closely with the module average (r = 0.815) and reasonably well with the overall masters mark (r = 0.683), indicating it was a suitable and representative assessment for the course."
        }
      ]
    },
    // === LECTURE 1 ===
    {
      title: "Lecture 1: An Overview of Data Vis",
      questions: [
        {
          id: "overview1",
          question: "Why use external representation?",
          type: "multiple-choice",
          options: [
            "(a) It allows us to surpass the limitations of our own internal cognition and memory.",
            "(b) It allows us to encode visual representations of data.",
            "(c) It lets us confirm that the visualization provides insight.",
            "(d) It allows us to understand the requirements of a problem."
          ],
          answer: "(a) It allows us to surpass the limitations of our own internal cognition and memory.",
          explanation: "External representations, like a visualization, offload cognitive work to the perceptual system, helping us overcome the limits of our short-term memory and processing capacity."
        },
        {
          id: "overview2",
          question: "Which of the following are reasons why visualization is a suitable approach for data analysis? (Select all that apply)",
          type: "multiple-select",
          options: [
            "(a) When a trusted, fully automatic solution already exists.",
            "(b) When you don't know the exact questions to ask in advance.",
            "(c) When you want to augment human capabilities, keeping the human 'in the loop'.",
            "(d) When you need to present findings to others."
          ],
          answer: "(b), (c), (d)",
          explanation: "Visualization is ideal for exploratory analysis (when questions are unknown), augmenting human perception, and communicating results. If a trusted automatic solution exists, visualization may not be necessary for the analysis step."
        },
        {
          id: "overview3",
          question: "The human visual system is often described as the 'high-bandwidth channel to the brain' because:",
          type: "multiple-choice",
          options: [
            "(a) It processes information sequentially, like sound.",
            "(b) It requires conscious effort to identify simple patterns.",
            "(c) Significant processing occurs in parallel and pre-attentively.",
            "(d) It has a very limited capacity for receiving data."
          ],
          answer: "(c) Significant processing occurs in parallel and pre-attentively.",
          explanation: "Our visual system can process a huge amount of information simultaneously (in parallel) and detect certain features without conscious effort (pre-attentively), making it a very high-bandwidth input channel."
        },
        {
          id: "overview4",
          question: "Anscombe's Quartet is a famous example that demonstrates that:",
          type: "multiple-choice",
          options: [
            "(a) All datasets with the same summary statistics look the same when plotted.",
            "(b) Summary statistics can be misleading and fail to reveal the underlying structure of the data.",
            "(c) Correlation is always equivalent to causation.",
            "(d) Visualizations are less accurate than statistical summaries."
          ],
          answer: "(b) Summary statistics can be misleading and fail to reveal the underlying structure of the data.",
          explanation: "The quartet consists of four datasets with nearly identical simple summary statistics, yet their visual plots are drastically different, proving the importance of visualizing data."
        },
        {
          id: "overview5",
          question: "The 'power of perception to reveal' is demonstrated by the ability of the visual system to perform which of the following tasks almost instantly?",
          type: "multiple-choice",
          options: [
            "(a) Counting the exact number of 'V's in a block of random letters.",
            "(b) Identifying a red circle among a group of blue circles.",
            "(c) Performing complex mathematical calculations.",
            "(d) Recalling a long sequence of numbers after a brief look."
          ],
          answer: "(b) Identifying a red circle among a group of blue circles.",
          explanation: "This is an example of pre-attentive processing or 'popout,' where certain visual features (like a unique color or shape) are detected by our low-level visual system in parallel, without a slow, serial search."
        },
        {
          id: "overview6",
          question: "Which of the following are levels/abstractions in the nested model of visualization design? (Select all that apply)",
          type: "multiple-select",
          options: [
            "(a) Domain situation",
            "(b) Interface",
            "(c) Idiom",
            "(d) Data/task abstraction",
            "(e) Algorithm"
          ],
          answer: "(a), (c), (d), (e)",
          explanation: "The four levels of the nested model are Domain Situation, Data/Task Abstraction, Idiom (Visual Encoding & Interaction Design), and Algorithm. Interface is part of the idiom but not a top-level abstraction itself."
        },
        {
          id: "overview7",
          question: "In the nested model, the 'Why?' question ('Why is the user looking at it?') corresponds to which abstraction level?",
          type: "multiple-choice",
          options: [
            "(a) Domain situation",
            "(b) Data abstraction",
            "(c) Task abstraction",
            "(d) Idiom"
          ],
          answer: "(c) Task abstraction",
          explanation: "The 'Why?' question defines the user's goal or task, which is the core of the Task Abstraction level."
        },
        {
          id: "overview8",
          question: "What is meant by the phrase 'external representation: replace cognition with perception'?",
          type: "short-answer",
          answer: "It means offloading the mental work of thinking, remembering, and calculating onto our powerful perceptual system. A good visualization allows us to 'see' patterns and relationships directly, rather than having to deduce them through slow, conscious thought.",
          explanation: "An example is using a map to find a route instead of trying to memorize a list of directions."
        },
        {
          id: "overview9",
          question: "List three distinct reasons given in the lecture for *why* we visualize data.",
          type: "short-answer",
          answer: "1. To explore or analyze data (find patterns, outliers). 2. To communicate or present ideas to others. 3. To answer a specific question or hypothesis.",
          explanation: "Other valid answers from the slide include: understand data in context, expand memory, or because 'Data is beautiful'."
        },
        {
          id: "overview10",
          question: "What is 'change blindness'? Briefly explain what it tells us about the limits of human cognition.",
          type: "short-answer",
          answer: "Change blindness is the phenomenon where a person fails to notice a significant change in a visual scene. It demonstrates that human attention and memory are limited; we do not perceive and retain every detail of what we see, and we must actively attend to something to notice a change.",
          explanation: "This is a key reason why visualization works: by making changes and data salient, we can guide the user's limited attention."
        },
        {
          id: "overview11",
          question: "Describe the difference between the *Domain situation* and the *Data/task abstraction* levels of the nested model.",
          type: "short-answer",
          answer: "The *Domain situation* level is about understanding the specific context, vocabulary, and problems of the target users in their real-world environment. The *Data/task abstraction* level involves translating those specific problems into a more generic, domain-independent vocabulary of data types and tasks.",
          explanation: "It's the process of moving from the specific (e.g., 'a biologist needs to find co-regulated genes') to the abstract (e.g., 'the user needs to find correlated items in a table')."
        },
        {
          id: "overview12",
          question: "In the context of the nested validation model, what is the core focus of the 'Idiom' level?",
          type: "short-answer",
          answer: "The 'Idiom' level focuses on *how* the data and tasks are represented visually and interactively. It deals with the specific design choices for visual encoding (how to draw the marks and channels) and interaction design (how to manipulate the view).",
          explanation: "This is where the actual visual design of the chart or interface is specified."
        },
        {
          id: "overview13",
          question: "Why is it important to analyze existing visualization idioms?",
          type: "short-answer",
          answer: "Analyzing existing idioms helps us understand the vast design space of possibilities. It provides a systematic way to think about encoding/interaction choices and gives us stepping stones for designing new, effective visualizations, since most possible designs are ineffective for any given task.",
          explanation: "It helps us learn from what works and avoid reinventing the wheel or making common mistakes."
        },
        {
          id: "overview14",
          question: "Briefly describe what a 'non-history' of data vis, like the examples from Leonardo da Vinci, shows us.",
          type: "short-answer",
          answer: "It shows that the practice of creating detailed, realistic visual representations for scientific understanding (like anatomical drawings) has a long history, even if it wasn't explicitly called 'data visualization'. It highlights that the core human impulse to visualize complex systems to understand them is not new.",
          explanation: "These are precursors to scientific visualization, distinct from the statistical graphics history traced by Friendly."
        },
        {
          id: "overview15",
          question: "What are the three main categories of limits for visualization mentioned in the slides?",
          type: "short-answer",
          answer: "Computational (processing time, system memory), Human (limited attention, memory, cognition), and Display (limited pixels, screen size).",
          explanation: "These three categories represent the key constraints that visualization designers must work within."
        }
      ]
    },
    // === LECTURE 2 ===
    {
      title: "Lecture 2: Data Abstractions",
      questions: [
        {
          id: "dataabs1",
          question: "The 'abstraction' stage of the nested model maps tasks and data from the vocabulary of the application domain into the vocabulary of:",
          type: "multiple-choice",
          options: [
            "(a) Graphic design",
            "(b) The specific visualization idiom",
            "(c) Computer science",
            "(d) Statistics"
          ],
          answer: "(c) Computer science",
          explanation: "The abstraction level translates domain-specific terms into generic descriptions of operations (tasks) and data types from the vocabulary of computer science."
        },
        {
          id: "dataabs2",
          question: "Which of the following is NOT one of the primary dataset types discussed?",
          type: "multiple-choice",
          options: [
            "(a) Tables",
            "(b) Networks & Trees",
            "(c) Text",
            "(d) Fields",
            "(e) Geometry"
          ],
          answer: "(c) Text",
          explanation: "The four main dataset types discussed are Tables, Networks & Trees, Fields (continuous), and Geometry (spatial). Text is a data type but not one of the four high-level dataset structures."
        },
        {
          id: "dataabs3",
          question: "In a tabular dataset, the rows are typically referred to as items or points, while the columns are referred to as:",
          type: "multiple-choice",
          options: [
            "(a) Attributes",
            "(b) Keys",
            "(c) Metadata",
            "(d) Values"
          ],
          answer: "(a) Attributes",
          explanation: "In a standard table, each row is an item (or data point) and each column represents an attribute of those items."
        },
        {
          id: "dataabs4",
          question: "The attribute type that has no implicit ordering is called:",
          type: "multiple-choice",
          options: [
            "(a) Ordinal",
            "(b) Quantitative",
            "(c) Categorical",
            "(d) Sequential"
          ],
          answer: "(c) Categorical",
          explanation: "Categorical data only supports equality comparisons (A == B?), but not ordering (A > B?). Examples include fruit types or nationalities."
        },
        {
          id: "dataabs5",
          question: "The 'MPG' attribute with values {Excellent, Good, Average, Bad} is an example of what attribute type?",
          type: "multiple-choice",
          options: [
            "(a) Quantitative",
            "(b) Categorical",
            "(c) Ordinal",
            "(d) Cyclic"
          ],
          answer: "(c) Ordinal",
          explanation: "This attribute has an implicit order (Excellent > Good > Average > Bad), but the magnitude of the difference between values is not defined, making it ordinal."
        },
        {
          id: "dataabs6",
          question: "A dataset of wind velocity vectors across the United States is best described as what dataset type?",
          type: "multiple-choice",
          options: [
            "(a) Table",
            "(b) Network",
            "(c) Geometry",
            "(d) Spatial Field"
          ],
          answer: "(d) Spatial Field",
          explanation: "This is a spatial field because it consists of attribute values (wind velocity) associated with cells (locations) in a continuous spatial domain."
        },
        {
          id: "dataabs7",
          question: "In the nested model, a mistake at the 'Data/task abstraction' level (e.g., 'You're showing them the wrong thing') will cascade and threaten the validity of which downstream levels? (Select all that apply)",
          type: "multiple-select",
          options: [
            "(a) Domain situation",
            "(b) Visual encoding/interaction idiom",
            "(c) Algorithm",
            "(d) All of the above"
          ],
          answer: "(b), (c)",
          explanation: "A mistake at one level threatens the validity of all levels below it. If the data/task abstraction is wrong, the idiom chosen for it and the algorithm implementing that idiom will also be wrong for the user's actual needs."
        },
        {
          id: "dataabs8",
          question: "What is a 'derived attribute'? Provide an example.",
          type: "short-answer",
          answer: "A derived attribute is a new attribute that is computed or transformed from the original data. An example is creating a 'trade balance' attribute by subtracting the 'imports' attribute from the 'exports' attribute.",
          explanation: "Deriving data is a key step in visualization, as it allows you to show what is most relevant to the task, not just what was in the original dataset."
        },
        {
          id: "dataabs9",
          question: "List the four main dataset types discussed in the lecture.",
          type: "short-answer",
          answer: "Tables, Networks & Trees, Fields (continuous), and Geometry (spatial).",
          explanation: "These four types provide a high-level way to classify the structure of a dataset to guide idiom selection."
        },
        {
          id: "dataabs10",
          question: "Explain the difference between a `static` dataset and a `dynamic` dataset in terms of data availability.",
          type: "short-answer",
          answer: "A `static` dataset is one where all the data is available and loaded at once before visualization begins. A `dynamic` or streaming dataset is one that is changing or being added to over time while the visualization is active.",
          explanation: "This distinction impacts the choice of algorithm and interaction techniques."
        },
        {
          id: "dataabs11",
          question: "For the dataset in slide 28, perform a data abstraction for the 'GPA' and 'Part-time Job' attributes.",
          type: "short-answer",
          answer: "GPA: Type = Ordered, Quantitative, Sequential. Part-time Job: Type = Categorical, Cardinality = 2 (Yes/No).",
          explanation: "GPA has a meaningful magnitude and order. 'Part-time Job' is a binary categorical attribute."
        },
        {
          id: "dataabs12",
          question: "What is the difference between a Network and a Tree dataset type?",
          type: "short-answer",
          answer: "A Tree is a special case of a Network. A tree has no cycles and typically has a designated root and a directed structure (parent-child relationships). A general network can have cycles and may be undirected.",
          explanation: "This distinction is important because there are specific visualization idioms designed just for trees (e.g., treemaps, node-link diagrams)."
        },
        {
          id: "dataabs13",
          question: "Why is it important to perform data abstraction?",
          type: "short-answer",
          answer: "Data abstraction helps a designer translate a specific, domain-dependent problem into a generic, well-understood structure (data types). This allows the designer to reason about appropriate visual encodings and interaction techniques based on established principles, independent of the original domain's vocabulary.",
          explanation: "It's the critical step of figuring out 'What' is being shown in a structured way."
        },
        {
          id: "dataabs14",
          question: "The nested model for evaluation is described as 'interdisciplinary'. Briefly explain what this means.",
          type: "short-answer",
          answer: "It means that validating a visualization requires methods from many different fields at each level. For example, evaluating the algorithm might use quantitative computer science benchmarks, while evaluating the domain situation might use qualitative ethnographic methods from anthropology.",
          explanation: "A complete evaluation spans multiple disciplines like CS, psychology, design, and anthropology."
        },
        {
          id: "dataabs15",
          question: "What is the key difference between how geometry is treated in computer graphics versus visualization?",
          type: "short-answer",
          answer: "In computer graphics, geometry is typically taken as given (it's the shape of the object you need to render). In visualization, geometry is often the result of a design decision (e.g., the shape and size of a bar in a bar chart, or the shape of a country on a choropleth map is used to encode data).",
          explanation: "Vis: Geometry is a result of a design decision. Graphics: Geometry is taken as given."
        }
      ]
    },
    // === LECTURE 3 ===
    {
      title: "Lecture 3: Task Abstractions",
      questions: [
        {
          id: "taskabs1",
          question: "In the context of the nested model, task abstraction involves translating domain-specific goals into:",
          type: "multiple-choice",
          options: [
            "(a) Specific visualization idioms.",
            "(b) Efficient algorithms.",
            "(c) Generic, domain-independent actions and targets.",
            "(d) A list of user requirements."
          ],
          answer: "(c) Generic, domain-independent actions and targets.",
          explanation: "Task abstraction is the process of defining the user's goal in a generic way, separate from the specific language of their work domain."
        },
        {
          id: "taskabs2",
          question: "Munzner's framework for tasks is structured as pairs of:",
          type: "multiple-choice",
          options: [
            "(a) Actions and Targets",
            "(b) Verbs and Nouns",
            "(c) What and Why",
            "(d) Idioms and Algorithms"
          ],
          answer: "(a) Actions and Targets",
          explanation: "The framework categorizes tasks by pairing a high-level user Action (the verb) with a data Target (the noun)."
        },
        {
          id: "taskabs3",
          question: "The high-level choice of whether a user is primarily consuming existing information or producing new information is part of which action category?",
          type: "multiple-choice",
          options: [
            "(a) Analyze",
            "(b) Search",
            "(c) Query",
            "(d) Enjoy"
          ],
          answer: "(a) Analyze",
          explanation: "The Analyze action is split into 'Consume' (discovering or presenting from existing info) and 'Produce' (creating new info, like annotations)."
        },
        {
          id: "taskabs4",
          question: "A user knows the target they are looking for (e.g., the GDP of Arizona in 2015) and they know where to look for it (in a table of states and years). According to Munzner's search actions, this is an example of:",
          type: "multiple-choice",
          options: [
            "(a) Lookup",
            "(b) Locate",
            "(c) Browse",
            "(d) Explore"
          ],
          answer: "(a) Lookup",
          explanation: "Lookup is when both the target and its location are known. This is like looking up a word in a dictionary."
        },
        {
          id: "taskabs5",
          question: "A user wants to find 'interesting horror movies' in the 'Horrified' visualization, but doesn't have a specific movie in mind. This is an example of which search action?",
          type: "multiple-choice",
          options: [
            "(a) Lookup",
            "(b) Locate",
            "(c) Browse",
            "(d) Explore"
          ],
          answer: "(d) Explore",
          explanation: "Explore is when both the target and its location are unknown. The user is engaging in open-ended, undirected discovery."
        },
        {
          id: "taskabs6",
          question: "The 'Query' actions (Identify, Compare, Summarize) are primarily concerned with what question?",
          type: "multiple-choice",
          options: [
            "(a) What does the user know?",
            "(b) Is the user consuming or producing?",
            "(c) How much of the data matters for the task?",
            "(d) Where is the target located?"
          ],
          answer: "(c) How much of the data matters for the task?",
          explanation: "Query actions deal with the scope of the task: Identify (one item), Compare (some items), or Summarize (all items)."
        },
        {
          id: "taskabs7",
          question: "In the 'Horrified' visualization example, where users can see the whole collection of movies at once, what is the primary *search* action being supported?",
          type: "multiple-choice",
          options: [
            "(a) Lookup",
            "(b) Locate",
            "(c) Browse/Explore",
            "(d) All of the above"
          ],
          answer: "(c) Browse/Explore",
          explanation: "The visualization presents a large collection of movies with some known structure (e.g., arranged by year), but no specific target is initially known. This supports browsing the collection and exploring relationships."
        },
        {
          id: "taskabs8",
          question: "What is the key difference between a *domain task description* and an *abstract task description*? Give an example of each.",
          type: "short-answer",
          answer: "A *domain task description* uses the specific language of the problem domain (e.g., 'Find which cars have low MPG'). An *abstract task description* translates this into a generic, domain-independent task (e.g., 'Find minimum values; compare values').",
          explanation: "This abstraction allows designers to apply general visualization principles to specific problems."
        },
        {
          id: "taskabs9",
          question: "List the three main categories of 'Actions' in Munzner's action and target framework.",
          type: "short-answer",
          answer: "Analyze, Search, and Query.",
          explanation: "These three categories are independent choices that can be mixed and matched to describe a user's intent."
        },
        {
          id: "taskabs10",
          question: "In Munzner's search actions framework, what are the two dimensions that define the four search types?",
          type: "short-answer",
          answer: "The two dimensions are whether the user knows the **Target** (Target known / Target unknown) and whether the user knows the **Location** of the target (Location known / Location unknown).",
          explanation: "The combination of these two binary choices creates the 2x2 matrix of Lookup, Locate, Browse, and Explore."
        },
        {
          id: "taskabs11",
          question: "Briefly describe the difference between the Analyze action 'Consume' and 'Produce'.",
          type: "short-answer",
          answer: "'Consume' involves using the visualization to gain understanding from existing information, which can range from discovering new patterns (explore) to presenting known facts (explain/enjoy). 'Produce' involves using the visualization to create new data or artifacts, such as annotating a chart, recording a view, or deriving a new attribute.",
          explanation: "Consume is about taking in information; Produce is about creating or outputting information."
        },
        {
          id: "taskabs12",
          question: "The domain task is 'Find the US state with the highest GDP in 2015'. Using Munzner's framework, what is a possible abstract action/target pair for this task?",
          type: "short-answer",
          answer: "Action: Query -> Identify (or Search -> Locate). Task: Find Extremum. Target: The 'GDP' attribute.",
          explanation: "This task involves identifying a single value (the maximum) from a specific attribute."
        },
        {
          id: "taskabs13",
          question: "According to the lecture, 'tasks are defined with respect to data and users, not visualizations!' Briefly explain what this means.",
          type: "short-answer",
          answer: "This means that the user's goal (the task) exists independently of the tool used to achieve it. The goal is about what the user wants to accomplish with their data. The visualization is the tool we design to help them achieve that goal. We fit the tool to the task, not the other way around.",
          explanation: "This principle ensures that the design process is user-centered and problem-driven."
        },
        {
          id: "taskabs14",
          question: "For the 'Horrified' example, a potential domain task is 'Explore the movies connected to a given director.' What is one possible *abstract* task that helps a user achieve this?",
          type: "short-answer",
          answer: "An abstract task could be: 'For a selected data point (a movie), explore and compare the linked/neighbor data points (other movies by that director).' This corresponds to exploring the *topology* of the network data.",
          explanation: "This abstracts the specific domain of 'movies' and 'directors' into the generic language of nodes and links."
        },
        {
          id: "taskabs15",
          question: "What is a 'Target' in Munzner's framework? Provide an example.",
          type: "short-answer",
          answer: "A Target is the 'noun' part of the task pair; it is the aspect of the dataset that the action is being performed upon. Examples include: All Data (when looking for trends or outliers), a specific Attribute (when finding its distribution or extremum), or Network Data (when examining topology or paths).",
          explanation: "The target specifies the scope and subject of the user's action."
        }
      ]
    },
    // === LECTURE 4 ===
    {
      title: "Lecture 4: Marks & Channels",
      questions: [
        {
          id: "markchan1",
          question: "In the vocabulary of visualization, what are 'marks'?",
          type: "multiple-choice",
          options: [
            "(a) The attributes of a dataset.",
            "(b) The basic geometric primitives used to represent items or links.",
            "(c) The visual properties that control the appearance of primitives.",
            "(d) The interactions available in the visualization."
          ],
          answer: "(b) The basic geometric primitives used to represent items or links.",
          explanation: "Marks are the fundamental geometric elements like points (0D), lines (1D), and areas (2D) that represent data items."
        },
        {
          id: "markchan2",
          question: "Which of the following are examples of 'channels'? (Select all that apply)",
          type: "multiple-select",
          options: [
            "(a) Point",
            "(b) Color hue",
            "(c) Size",
            "(d) Line",
            "(e) Position"
          ],
          answer: "(b), (c), (e)",
          explanation: "Channels are visual properties that modify the appearance of marks. Point and Line are types of marks, not channels."
        },
        {
          id: "markchan3",
          question: "The Expressiveness Principle states that a visual encoding should:",
          type: "multiple-choice",
          options: [
            "(a) Be as beautiful and engaging as possible.",
            "(b) Use the most effective channels for the most important attributes.",
            "(c) Express all of, and only, the information in the dataset attributes.",
            "(d) Ensure that all marks are easily separable."
          ],
          answer: "(c) Express all of, and only, the information in the dataset attributes.",
          explanation: "Expressiveness is about faithfully representing the data: match the channel type to the data type, and don't imply information that doesn't exist (like ordering for categorical data)."
        },
        {
          id: "markchan4",
          question: "Using a bar chart to represent car nationalities (USA, Japan, Germany) violates the expressiveness principle because:",
          type: "multiple-choice",
          options: [
            "(a) The length of the bar implies an ordering that does not exist in the categorical 'Nation' attribute.",
            "(b) A bar chart cannot be used for categorical data.",
            "(c) The color of the bars is not specified.",
            "(d) There are too many nationalities to display."
          ],
          answer: "(a) The length of the bar implies an ordering that does not exist in the categorical 'Nation' attribute.",
          explanation: "Bar length is a magnitude channel, implying order. Nation is a categorical attribute with no inherent order. This mismatch is a violation of expressiveness."
        },
        {
          id: "markchan5",
          question: "According to channel effectiveness rankings, which channel is most effective for encoding quantitative (magnitude) data?",
          type: "multiple-choice",
          options: [
            "(a) Color hue",
            "(b) Area",
            "(c) Position on a common scale",
            "(d) Shape"
          ],
          answer: "(c) Position on a common scale",
          explanation: "Experiments in graphical perception have shown that humans are most accurate at judging magnitudes when they are encoded by position along a common, aligned scale (like in a bar chart)."
        },
        {
          id: "markchan6",
          question: "'Popout' or 'pre-attentive processing' refers to the ability to:",
          type: "multiple-choice",
          options: [
            "(a) See 3D objects emerge from a 2D visualization.",
            "(b) Instantly detect certain visual properties without a conscious, serial search.",
            "(c) Mentally group items together based on proximity.",
            "(d) Understand the meaning of a visualization without a legend."
          ],
          answer: "(b) Instantly detect certain visual properties without a conscious, serial search.",
          explanation: "Popout is the near-instantaneous detection of a target with a unique visual feature (e.g., a single red dot among blue dots) by our low-level parallel visual processing."
        },
        {
          id: "markchan7",
          question: "Color hue and shape are examples of what kind of channels, best suited for categorical data?",
          type: "multiple-choice",
          options: [
            "(a) Integral channels",
            "(b) Identity channels",
            "(c) Magnitude channels",
            "(d) Grouping channels"
          ],
          answer: "(b) Identity channels",
          explanation: "Identity channels are effective at showing that items belong to different categories, but they do not imply any order or magnitude."
        },
        {
          id: "markchan8",
          question: "What is the Effectiveness Principle in visualization design?",
          type: "short-answer",
          answer: "The Effectiveness Principle states that the importance of an attribute should match the salience (effectiveness) of the visual channel used to encode it. In other words, encode your most important data with the most effective channels.",
          explanation: "This principle guides designers to use the limited set of highly effective channels (like position) for the data that matters most to the user's task."
        },
        {
          id: "markchan9",
          question: "List the three basic types of marks, categorized by their dimensionality (0D, 1D, 2D).",
          type: "short-answer",
          answer: "0D: Points. 1D: Lines. 2D: Areas.",
          explanation: "These are the fundamental geometric primitives from which visualizations are constructed."
        },
        {
          id: "markchan10",
          question: "A scatter plot encodes 4 attributes using a single point mark. List the four channels typically used.",
          type: "short-answer",
          answer: "1. Horizontal position (x), 2. Vertical position (y), 3. Color hue, 4. Size (area).",
          explanation: "This demonstrates how multiple channels can be combined on a single mark to encode multivariate data."
        },
        {
          id: "markchan11",
          question: "Explain what makes a pair of visual channels 'separable' versus 'integral'. Give an example of each.",
          type: "short-answer",
          answer: "Separable channels can be perceived independently of each other (e.g., position and color; you can easily focus on just the positions or just the colors). Integral channels are interpreted as a combined whole and are hard to disentangle (e.g., the width and height of a rectangle are perceived together as its shape/size, not as two separate values).",
          explanation: "Understanding separability is crucial when combining multiple channels to encode different attributes."
        },
        {
          id: "markchan12",
          question: "What is the key takeaway from Weber's Law for visualization design?",
          type: "short-answer",
          answer: "The key takeaway is that human perception operates on *relative* judgments, not absolute ones. Our ability to perceive a difference is proportional to the background intensity. This is why accuracy increases dramatically when we use a common frame, scale, and alignment, as it facilitates easier relative judgments.",
          explanation: "This law explains why bar charts (common scale, aligned) are more accurate for comparison than pie charts (unaligned angles)."
        },
        {
          id: "markchan13",
          question: "What is 'discriminability' in the context of visual channels?",
          type: "short-answer",
          answer: "Discriminability refers to how many distinct values (or 'bins') we can distinguish for a given channel. For many channels, like line width or color hue, the number of truly distinguishable steps is surprisingly low.",
          explanation: "Designers must be careful not to overestimate a channel's discriminability, as using too many categories can make the visualization unreadable."
        },
        {
          id: "markchan14",
          question: "In the Charles Minard map of Napoleon's march, what are the primary marks used? List at least two channels used to encode data on those marks.",
          type: "short-answer",
          answer: "The primary marks are **Area** (for the bands representing army size) and **Line** (for the temperature chart). Channels used on the area mark include: `width` (army size), `x/y position` (geographical location), and `color` (direction of travel).",
          explanation: "This chart is famous for encoding many attributes through a masterful combination of marks and channels."
        },
        {
          id: "markchan15",
          question: "The lecture shows an example of using a rainbow color hue scale to represent elevation on a map as a violation of expressiveness. Why is this a violation?",
          type: "short-answer",
          answer: "It's a violation because color hue is an *identity* channel (good for categorical data) with no inherent, uniform perceptual ordering. Elevation is *ordered magnitude* data. Using an unordered channel for ordered data misrepresents the data's nature and violates the expressiveness principle.",
          explanation: "A sequential luminance or saturation scale would be an expressive choice for elevation."
        }
      ]
    },
    // === LECTURE 5 ===
    {
      title: "Lecture 5: Manipulating Data (Interaction)",
      questions: [
        {
          id: "manip1",
          question: "The lecture states that visual interaction uses an 'asymmetry in data rates.' What does this mean?",
          type: "multiple-choice",
          options: [
            "(a) The amount of data flowing from the user to the system is much greater than from the system to the user.",
            "(b) The speed of interaction is always faster than the speed of rendering.",
            "(c) The amount of data flowing from the system to the user is much greater than from the user to the system.",
            "(d) Interaction is primarily designed for entering new data into the system."
          ],
          answer: "(c) The amount of data flowing from the system to the user is much greater than from the user to the system.",
          explanation: "A visualization sends a massive amount of data to the user's perceptual system, while the user sends back very low-bandwidth commands (clicks, drags). Therefore, interaction is mostly for changing the representation, not for data entry."
        },
        {
          id: "manip2",
          question: "Which of the following is NOT one of the four main ways to handle complexity in a visualization?",
          type: "multiple-choice",
          options: [
            "(a) Derive",
            "(b) Manipulate",
            "(c) Animate",
            "(d) Facet",
            "(e) Reduce"
          ],
          answer: "(c) Animate",
          explanation: "The four high-level ways to handle complexity are Derive, Manipulate, Facet, and Reduce. Animation is a specific technique often used within Manipulation, but not one of the top-level categories."
        },
        {
          id: "manip3",
          question: "Using a slider to change the number of bins in a histogram is an example of which type of interaction?",
          type: "multiple-choice",
          options: [
            "(a) Select",
            "(b) Change",
            "(c) Navigate",
            "(d) Link"
          ],
          answer: "(b) Change",
          explanation: "This is a 'Change' interaction because it alters the parameters of the view, causing the visual representation of the data to be re-encoded."
        },
        {
          id: "manip4",
          question: "Animated transitions are presented as a way to:",
          type: "multiple-choice",
          options: [
            "(a) Make the visualization more entertaining.",
            "(b) Reduce cognitive load and allow users to track changes.",
            "(c) Increase the amount of data shown on screen.",
            "(d) Slow down user interaction to ensure accuracy."
          ],
          answer: "(b) Reduce cognitive load and allow users to track changes.",
          explanation: "By smoothly interpolating between states, animated transitions help the user maintain context and visually track how items move and change, which is less cognitively demanding than abrupt 'jump cuts'."
        },
        {
          id: "manip5",
          question: "A tooltip that appears when you hover over a data point is a classic example of providing:",
          type: "multiple-choice",
          options: [
            "(a) An overview",
            "(b) Detail on demand",
            "(c) A filtered view",
            "(d) A coordinated view"
          ],
          answer: "(b) Detail on demand",
          explanation: "This is a core principle of the visual information seeking mantra. Tooltips provide specific details about a selected item without cluttering the main view."
        },
        {
          id: "manip6",
          question: "Highlighting a selected item by adding an outline mark or changing its size is a design choice related to which interaction?",
          type: "multiple-choice",
          options: [
            "(a) Change",
            "(b) Select",
            "(c) Navigate",
            "(d) Link"
          ],
          answer: "(b) Select",
          explanation: "Selecting marks an item or set of items. Highlighting is the visual feedback provided to the user to show what has been selected."
        },
        {
          id: "manip7",
          question: "According to the 'Rule of Thumb for responsiveness', an operation that takes several seconds (e.g., 5-10) should provide what kind of feedback?",
          type: "multiple-choice",
          options: [
            "(a) An immediate change in the view.",
            "(b) No feedback until the operation is complete.",
            "(c) Feedback showing progress, like a spinning wheel or progress bar.",
            "(d) An error message."
          ],
          answer: "(c) Feedback showing progress, like a spinning wheel or progress bar.",
          explanation: "For multi-second or longer operations, it's crucial to provide feedback that the system is working, so the user doesn't think it has crashed. A progress indicator serves this purpose."
        },
        {
          id: "manip8",
          question: "List the four main ways to interact with a visualization as categorized in the lecture.",
          type: "short-answer",
          answer: "Change the view, Select one or more data items, Navigate to a different viewpoint, Link to another view.",
          explanation: "These four categories provide a simple framework for thinking about the different kinds of interactivity a visualization can support."
        },
        {
          id: "manip9",
          question: "What is a key disadvantage of using animation compared to small multiples for showing changes over time?",
          type: "short-answer",
          answer: "A key disadvantage is that changes can be hard to track, and it forces the user to rely on their memory to compare different points in time ('Eyes over memory!'). Small multiples allow for direct, static comparison.",
          explanation: "Animation is good for showing overall trends but bad for precise comparison between non-adjacent time steps."
        },
        {
          id: "manip10",
          question: "Explain the difference between a `heavyweight` interaction modality (like a click) and a `lightweight` modality (like a hover).",
          type: "short-answer",
          answer: "A `heavyweight` interaction like a click/tap requires a deliberate, explicit user action and is persistent. A `lightweight` interaction like a hover is more passive, triggered simply by moving the cursor over an element, and is typically transient.",
          explanation: "Lightweight interactions like hover are not available on touchscreens, which is a key consideration for interface design."
        },
        {
          id: "manip11",
          question: "What is 'scrollytelling'?",
          type: "short-answer",
          answer: "Scrollytelling is a narrative technique that uses the user's scroll position to navigate a story, activating and changing content (including visualizations) as the user scrolls up or down the page.",
          explanation: "It's a popular form of author-driven narrative visualization on the web."
        },
        {
          id: "manip12",
          question: "In the context of responsiveness, why should long operations be 'non-blocking'?",
          type: "short-answer",
          answer: "Long operations should be non-blocking so that the user interface remains responsive. This allows the user to continue interacting with other parts of the system, or to see the progress of the operation, rather than having the entire application freeze until the long task is complete.",
          explanation: "A frozen UI provides poor user experience and can make users think the application has crashed."
        },
        {
          id: "manip13",
          question: "Describe the difference between the 'Navigate' interaction and the 'Change' interaction.",
          type: "short-answer",
          answer: "'Navigate' changes the user's viewpoint or perspective on the data, but the data itself and its encoding do not change (e.g., zooming/panning a map). 'Change' alters the visual representation of the data itself (e.g., changing from a bar chart to a line chart, filtering data, or changing the number of histogram bins).",
          explanation: "Navigate = changing the camera. Change = changing the scene."
        },
        {
          id: "manip14",
          question: "What is the purpose of using Voronoi regions in a scatterplot interaction?",
          type: "short-answer",
          answer: "Voronoi regions partition the 2D space so that every point in a given region is closer to one specific data point than any other. This allows for 'closest point' highlighting, making it easy to select a point with the mouse cursor even if the cursor isn't directly on top of it, which solves the problem of needing pixel-perfect accuracy.",
          explanation: "This is a clever algorithmic solution to improve the usability of selecting small marks."
        },
        {
          id: "manip15",
          question: "Briefly describe two different interaction technologies beyond the standard mouse and keyboard.",
          type: "short-answer",
          answer: "1. Touchscreen (tablet/mobile): Allows for direct manipulation via taps and gestures but lacks a hover state. 2. Gesture-based: Uses computer vision to recognize face/pose or motion capture to control the interface without physical contact.",
          explanation: "Other valid answers: Eye movements, Virtual/Augmented Reality (head tracking)."
        }
      ]
    },
    // === LECTURE 6 ===
    {
      title: "Lecture 6: Facet & Reduce",
      questions: [
        {
          id: "facet1",
          question: "Which of the following are methods to 'Facet' data? (Select all that apply)",
          type: "multiple-select",
          options: [
            "(a) Filter",
            "(b) Juxtapose",
            "(c) Superimpose",
            "(d) Aggregate",
            "(e) Partition"
          ],
          answer: "(b), (c), (e)",
          explanation: "Faceting involves showing data across multiple views. The three methods are Juxtapose (side-by-side), Partition (dividing data into views), and Superimpose (layering views). Filter and Aggregate are methods to Reduce data."
        },
        {
          id: "facet2",
          question: "The Visual Information-Seeking Mantra is:",
          type: "multiple-choice",
          options: [
            "(a) Details first, zoom and filter, then overview.",
            "(b) Overview first, zoom and filter, then details on demand.",
            "(c) Filter first, overview, then details on demand.",
            "(d) Details on demand, overview, then zoom and filter."
          ],
          answer: "(b) Overview first, zoom and filter, then details on demand.",
          explanation: "This famous mantra by Ben Shneiderman provides a foundational design principle for interfaces that allow data exploration."
        },
        {
          id: "facet3",
          question: "Small multiples, where the same chart type is used for different slices of the data, is an example of what kind of view coordination?",
          type: "multiple-choice",
          options: [
            "(a) Data: None shared; Encoding: Same",
            "(b) Data: All shared; Encoding: Different",
            "(c) Data: Subset shared; Encoding: Same",
            "(d) Data: All shared; Encoding: Same"
          ],
          answer: "(a) Data: None shared; Encoding: Same",
          explanation: "In the coordination matrix, small multiples use the same encoding for each view, but each view shows a different, non-overlapping partition of the data (no shared data)."
        },
        {
          id: "facet4",
          question: "'Brushing and linking,' where selecting an item in one view highlights the same item in another, is also known as:",
          type: "multiple-choice",
          options: [
            "(a) Overview+detail",
            "(b) Focus+context",
            "(c) Linked highlighting",
            "(d) Dynamic querying"
          ],
          answer: "(c) Linked highlighting",
          explanation: "Linked highlighting is the general term for coordinating selections across multiple juxtaposed or multiform views."
        },
        {
          id: "facet5",
          question: "A boxplot is an idiom that is primarily an example of which method for reducing data?",
          type: "multiple-choice",
          options: [
            "(a) Filtering",
            "(b) Scented Widgets",
            "(c) Aggregation",
            "(d) Embedding"
          ],
          answer: "(c) Aggregation",
          explanation: "A boxplot aggregates many individual data points into a smaller set of derived statistics (median, quartiles, fences) to summarize the distribution."
        },
        {
          id: "facet6",
          question: "'Out of sight, out of mind' is presented as a potential con for which reduction technique?",
          type: "multiple-choice",
          options: [
            "(a) Filtering",
            "(b) Aggregation",
            "(c) Embedding",
            "(d) Dynamic querying"
          ],
          answer: "(a) Filtering",
          explanation: "When you filter data, the items are completely removed from the view. This can be problematic because the user loses the context of the filtered-out items and may forget they exist."
        },
        {
          id: "facet7",
          question: "A histogram is a classic example of item aggregation. The pattern it shows can change dramatically based on what user-controlled parameter?",
          type: "multiple-choice",
          options: [
            "(a) The color of the bars.",
            "(b) The height of the y-axis.",
            "(c) The number of bins (bin size).",
            "(d) The font size of the labels."
          ],
          answer: "(c) The number of bins (bin size).",
          explanation: "The choice of bin size is crucial for histograms, as different bin widths can reveal or hide different features (like modality) in the data's distribution."
        },
        {
          id: "facet8",
          question: "What is the difference between `Juxtapose` and `Superimpose` as faceting techniques?",
          type: "short-answer",
          answer: "`Juxtapose` places multiple views side-by-side in different spatial regions. `Superimpose` places multiple views as layers on top of each other in the same spatial region.",
          explanation: "An example of juxtaposition is a dashboard with a map and a bar chart. An example of superimposition is plotting roads as one layer on top of regions as another layer on a single map."
        },
        {
          id: "facet9",
          question: "What is the core idea behind an 'overview+detail' display?",
          type: "short-answer",
          answer: "The core idea is to show a broad overview of the entire dataset in one view, while simultaneously showing a detailed, zoomed-in view of a specific area of interest (the focus) in another view. The navigation is typically shared or linked between the two.",
          explanation: "This technique helps maintain context while allowing for detailed examination."
        },
        {
          id: "facet10",
          question: "In the context of reducing data, what is the difference between Filtering and Aggregation?",
          type: "short-answer",
          answer: "`Filtering` reduces the amount of data by eliminating some of the elements (items or attributes) from the view. `Aggregation` reduces the data by representing a group of elements with a smaller group of derived objects (e.g., representing many individual points with a single average value).",
          explanation: "Filtering removes data; aggregation summarizes it."
        },
        {
          id: "facet11",
          question: "A violin plot is described as a combination of two other common chart types. What are they?",
          type: "short-answer",
          answer: "A box plot and a probability density function (or kernel density plot), mirrored to create the violin shape.",
          explanation: "This makes it a more informative alternative to a standard boxplot, as it can show the shape of the distribution (e.g., bimodality) which a boxplot hides."
        },
        {
          id: "facet12",
          question: "In the 'Groups bars vs small multiples' example, what is one advantage of using small multiples (split by age) over the complex glyph (split by state)?",
          type: "short-answer",
          answer: "One advantage is that it is easier to compare values *within* a single age group across all states, because the bars for that age group are all in one chart and aligned on a common scale. In the grouped bar chart, this comparison is harder.",
          explanation: "The choice of how to partition the data has major implications for which comparisons are easy or hard to make."
        },
        {
          id: "facet13",
          question: "What is a 'scented widget' and what is its primary purpose?",
          type: "short-answer",
          answer: "A scented widget is a small, concise visualization (like a mini-histogram) embedded within a UI control (like a slider). Its purpose is to provide 'information scent,' giving the user cues about the underlying data distribution to help them decide if drilling down into a particular area is worthwhile (information foraging).",
          explanation: "It helps guide navigation and filtering by showing a preview of what's inside."
        },
        {
          id: "facet14",
          question: "What is a major trade-off when deciding between `superimposing` multiple line charts versus `juxtaposing` them?",
          type: "short-answer",
          answer: "`Superimposing` works well for local comparisons (e.g., 'which line is highest at this specific timestep?') but can get very cluttered and hard to read with many lines. `Juxtaposing` uses more screen space but is better for global tasks like analyzing the overall slope or shape of a single line without interference from others.",
          explanation: "Superimpose is good for local comparison; Juxtapose is good for global trend analysis and avoids clutter."
        },
        {
          id: "facet15",
          question: "What is 'dynamic querying'?",
          type: "short-answer",
          answer: "Dynamic querying is the tight coupling of an interaction control (like a slider) with a visual display, providing immediate and continuous feedback as the user manipulates the control. It is a powerful form of interactive filtering.",
          explanation: "The key is the immediate feedback, which allows for rapid exploration of the data."
        }
      ]
    },
    // === LECTURE 7 ===
    {
      title: "Lecture 7: Data Storytelling",
      questions: [
        {
          id: "story1",
          question: "The lecture argues that people respond to statistics on a logical level, but respond to stories on a(n):",
          type: "multiple-choice",
          options: [
            "(a) Emotional level",
            "(b) Visual level",
            "(c) Analytical level",
            "(d) Abstract level"
          ],
          answer: "(a) Emotional level",
          explanation: "A central theme of data storytelling is that stories make data more meaningful, memorable, and impactful by engaging the audience on an emotional level."
        },
        {
          id: "story2",
          question: "In the spectrum of author vs. reader-driven stories, a 'Martini Glass Structure' typically involves:",
          type: "multiple-choice",
          options: [
            "(a) A completely free, unguided exploration by the reader.",
            "(b) A linear, author-driven narrative at the beginning, followed by an opportunity for reader-driven exploration.",
            "(c) An interactive slideshow with only forward and backward buttons.",
            "(d) A story that is different every time you view it."
          ],
          answer: "(b) A linear, author-driven narrative at the beginning, followed by an opportunity for reader-driven exploration.",
          explanation: "The 'Martini Glass' starts with a narrow, author-driven path (the stem) and then opens up to wider, reader-driven exploration (the bowl)."
        },
        {
          id: "story3",
          question: "Which audience type, according to the domain abstraction for storytelling, needs analysis and discovery, not storytelling?",
          type: "multiple-choice",
          options: [
            "(a) Novice",
            "(b) Generalist",
            "(c) Manager",
            "(d) Expert"
          ],
          answer: "(d) Expert",
          explanation: "Experts typically want powerful analytical tools to find their own insights, making a highly reader-driven, exploratory interface more suitable for them than a guided story."
        },
        {
          id: "story4",
          question: "'Visualization rhetoric' is defined as the use of narrative, styling, and design techniques to influence:",
          type: "multiple-choice",
          options: [
            "(a) Only what insights can be learned.",
            "(b) Only how the data story is perceived.",
            "(c) Both how the story is perceived and what insights can be learned.",
            "(d) The speed and efficiency of the underlying algorithm."
          ],
          answer: "(c) Both how the story is perceived and what insights can be learned.",
          explanation: "Rhetoric shapes both the perception (e.g., feeling that a system is complex) and the insights (e.g., concluding one value is much larger than another) derived from a visualization."
        },
        {
          id: "story5",
          question: "Using 'visual noise' to make a chart appear confusing, as in the first Obamacare example, is a rhetorical technique to argue that the underlying system is confusing. This is primarily an example of:",
          type: "multiple-choice",
          options: [
            "(a) Provenance",
            "(b) Simplification",
            "(c) Obscuring through visual metaphor",
            "(d) Anchoring"
          ],
          answer: "(c) Obscuring through visual metaphor",
          explanation: "This technique uses the visual metaphor that 'cluttered visuals equal a cluttered system' to obscure clarity and make a persuasive point."
        },
        {
          id: "story6",
          question: "'Framing effects' are when:",
          type: "multiple-choice",
          options: [
            "(a) All data is presented within a single rectangular frame.",
            "(b) Small changes in how an issue is presented result in significant changes in interpretation.",
            "(c) The designer provides clear provenance for all data sources.",
            "(d) The story follows a perfectly linear narrative structure."
          ],
          answer: "(b) Small changes in how an issue is presented result in significant changes in interpretation.",
          explanation: "Framing is about how the presentation of information (e.g., truncating an axis) can change the conclusion a viewer draws, even if the underlying data is the same."
        },
        {
          id: "story7",
          question: "Ordering, Interactivity, and Messaging are examples of what kind of storytelling techniques?",
          type: "multiple-choice",
          options: [
            "(a) Visual structuring",
            "(b) Rhetorical devices",
            "(c) Narrative structuring",
            "(d) Data abstractions"
          ],
          answer: "(c) Narrative structuring",
          explanation: "These are non-visual techniques that assist and facilitate the narrative by defining the path (Ordering), the viewer's control (Interactivity), and the explanatory context (Messaging)."
        },
        {
          id: "story8",
          question: "List the three main components of 'Visual Structuring' used to organize visual media into a narrative.",
          type: "short-answer",
          answer: "Structuring, Highlighting, and Transition guidance.",
          explanation: "These techniques use visual cues to direct attention (Structuring), draw focus to important areas (Highlighting), and move between scenes coherently (Transition guidance)."
        },
        {
          id: "story9",
          question: "Describe the difference between an 'author-driven' story and a 'reader-driven' story.",
          type: "short-answer",
          answer: "An 'author-driven' story follows a strong, linear narrative path with heavy messaging and limited interactivity (e.g., a video or scrollytelling article). A 'reader-driven' story has no prescribed ordering and offers free interactivity, allowing the user to explore the data and find their own insights (e.g., an exploratory dashboard).",
          explanation: "These represent two ends of a spectrum of user control in narrative visualization."
        },
        {
          id: "story10",
          question: "The lecture shows two bar charts about 'the glass ceiling'. The second chart has a much larger y-axis scale (0% to 100%). What rhetorical effect does this have compared to the first chart?",
          type: "short-answer",
          answer: "The first chart, with a truncated y-axis, uses framing to exaggerate the change over time, making the growth seem significant. The second chart, with a full y-axis from 0% to 100%, provides a more truthful context and makes the change seem much smaller and less significant, reinforcing the 'glass ceiling persists' narrative more strongly.",
          explanation: "This is a classic example of using axis scaling as a rhetorical device to either emphasize or de-emphasize a trend."
        },
        {
          id: "story11",
          question: "What is the primary goal of the rhetorical device of 'simplification'?",
          type: "short-answer",
          answer: "The primary goal is to reduce noise and highlight important trends, groups, or patterns that might be obscured by showing all the individual data points. This is done by aggregating, filtering, or deriving simpler data.",
          explanation: "Simplification is a common and often necessary rhetorical device to make complex data understandable."
        },
        {
          id: "story12",
          question: "The New York Times 'mobility animation' is used as an example of Narrative Structuring. Name two of the three narrative structuring techniques it employs.",
          type: "short-answer",
          answer: "1. Ordering (the path of the animation is linear). 2. Interactivity (the controls allow users to change the demographic groups being compared). 3. Messaging (the accompanying article text provides context and explanation).",
          explanation: "This example shows how multiple narrative techniques can be combined effectively."
        },
        {
          id: "story13",
          question: "In the context of telling a story with data, what is the recommended relationship between the visualization and the story?",
          type: "short-answer",
          answer: "The visualization should be used to augment the data story you are telling, not the other way around. The story and its message should come first, and the visualization should be designed to support that story.",
          explanation: "This principle emphasizes that storytelling is the primary goal, and visualization is the tool to achieve it."
        },
        {
          id: "story14",
          question: "Briefly define the rhetorical device of 'Anchoring'.",
          type: "short-answer",
          answer: "Anchoring is the technique of directing the viewer's attention to an initial piece of information (like a default view or a prominent number), which then serves as a reference point that helps inform or bias the interpretation of all subsequent information.",
          explanation: "First impressions matter, and anchoring leverages this cognitive bias."
        },
        {
          id: "story15",
          question: "What is one benefit and one drawback of a highly 'reader-driven' (or drill-down) story structure?",
          type: "short-answer",
          answer: "Benefit: It is powerful for expert users, allowing for deep, unconstrained analysis and personal discovery. Drawback: It can be overwhelming for novice users, as there is no guidance, and the intended message of the author may be missed entirely.",
          explanation: "The choice of structure depends heavily on the target audience."
        }
      ]
    },
    // === LECTURE 8 ===
    {
      title: "Lecture 8: Visualizing Tabular Data",
      questions: [
        {
          id: "tabular1",
          question: "Which visualization idiom is generally best suited for showing the relationship between two ordered, quantitative attributes?",
          type: "multiple-choice",
          options: [
            "(a) Bar chart",
            "(b) Scatterplot",
            "(c) Pie chart",
            "(d) Parallel coordinates plot"
          ],
          answer: "(b) Scatterplot",
          explanation: "A scatterplot uses the two most effective visual channels (horizontal and vertical position) to encode two quantitative attributes, making it ideal for showing trends, correlation, and clusters."
        },
        {
          id: "tabular2",
          question: "A bar chart typically visualizes:",
          type: "multiple-choice",
          options: [
            "(a) Two ordered attributes.",
            "(b) One ordered attribute and one categorical attribute (a key).",
            "(c) Many categorical attributes.",
            "(d) Data with two keys."
          ],
          answer: "(b) One ordered attribute and one categorical attribute (a key).",
          explanation: "A standard bar chart has a categorical attribute that defines the bars (the key) and an ordered attribute that defines the length of each bar."
        },
        {
          id: "tabular3",
          question: "Using a line chart to connect data points for a categorical key (e.g., 'Female' and 'Male') violates the expressiveness principle because:",
          type: "multiple-choice",
          options: [
            "(a) The line implies a connection and ordering between the categories that does not exist.",
            "(b) Line charts can only be used for time-series data.",
            "(c) The data points are not labeled.",
            "(d) The axes are not aligned."
          ],
          answer: "(a) The line implies a connection and ordering between the categories that does not exist.",
          explanation: "The line mark implies a relationship and continuity between the points it connects. For unrelated categories, this is misleading."
        },
        {
          id: "tabular4",
          question: "A key drawback of a Parallel Coordinates Plot (PCP) compared to a Scatterplot Matrix (SPLOM) is that:",
          type: "multiple-choice",
          options: [
            "(a) It cannot show more than two attributes.",
            "(b) Patterns are typically only visible between neighboring axes.",
            "(c) It is not suitable for showing clusters.",
            "(d) It uses area marks, which are inaccurate."
          ],
          answer: "(b) Patterns are typically only visible between neighboring axes.",
          explanation: "In a PCP, the visibility of correlations and patterns is highly dependent on the ordering of the axes, as you can only directly see relationships between adjacent axes."
        },
        {
          id: "tabular5",
          question: "A heatmap visualizes data using two keys and what primary visual channel?",
          type: "multiple-choice",
          options: [
            "(a) Size",
            "(b) Shape",
            "(c) Length",
            "(d) Color"
          ],
          answer: "(d) Color",
          explanation: "A heatmap uses two key attributes to define the x/y position in a matrix, and then uses the color of the cell at that position to encode a quantitative value."
        },
        {
          id: "tabular6",
          question: "A slopegraph is an idiom primarily designed for which task?",
          type: "multiple-choice",
          options: [
            "(a) Showing the distribution of a single attribute.",
            "(b) Comparing two values for each item, often to emphasize changes in rank or value.",
            "(c) Finding clusters in high-dimensional data.",
            "(d) Displaying part-to-whole relationships."
          ],
          answer: "(b) Comparing two values for each item, often to emphasize changes in rank or value.",
          explanation: "A slopegraph consists of two parallel axes and lines connecting the values for each item, making it excellent for showing 'before and after' comparisons."
        },
        {
          id: "tabular7",
          question: "A streamgraph is a variant of what other chart type?",
          type: "multiple-choice",
          options: [
            "(a) Stacked bar chart",
            "(b) Stacked area chart / Multi-line chart",
            "(c) Scatterplot",
            "(d) Gantt chart"
          ],
          answer: "(b) Stacked area chart / Multi-line chart",
          explanation: "A streamgraph is a type of stacked area graph that is displaced around a central, wandering baseline, creating an organic 'river' shape."
        },
        {
          id: "tabular8",
          question: "What is a 'key' in the context of visualizing tabular data?",
          type: "short-answer",
          answer: "A key is an index attribute (often a categorical or ordinal column) for a data point that can be used for lookups. In many charts, it's the attribute that uniquely identifies each mark or glyph (e.g., the 'State' in a bar chart of state populations).",
          explanation: "Charts can have 0 keys (scatterplot), 1 key (bar chart), or 2 keys (heatmap)."
        },
        {
          id: "tabular9",
          question: "List three common tasks for which a scatterplot is well-suited.",
          type: "short-answer",
          answer: "1. Show trends (e.g., positive/negative correlation). 2. Find outliers. 3. Show distribution and clusters.",
          explanation: "The use of two positional channels makes scatterplots very versatile for exploring relationships between two quantitative variables."
        },
        {
          id: "tabular10",
          question: "Why is it generally difficult to directly compare two slices in a pie chart?",
          type: "short-answer",
          answer: "It is difficult because it requires comparing angles or areas, which are low on the channel effectiveness ranking. The slices are not aligned on a common scale, making precise relative judgments hard for the human visual system.",
          explanation: "This is why bar charts are generally preferred for magnitude comparisons."
        },
        {
          id: "tabular11",
          question: "What is a 'glyph' in the context of a stacked bar chart?",
          type: "short-answer",
          answer: "A glyph is a composite object based on combining multiple marks. In a stacked bar chart, the entire stacked bar for a single key (e.g., one state) is a glyph. It is composed of multiple smaller marks (the segments) stacked on top of each other.",
          explanation: "Thinking in terms of glyphs helps decompose complex visualizations."
        },
        {
          id: "tabular12",
          question: "Describe the main difference between a standard stacked bar chart and a normalized stacked bar chart.",
          type: "short-answer",
          answer: "In a standard stacked bar chart, the total length of each bar represents the sum of its parts, and bars have different total lengths. In a normalized stacked bar chart, every bar has the same total height (normalized to 100%), and the segments show the part-to-whole percentage for each category, making it equivalent to a series of pie charts.",
          explanation: "Standard stacked bars are for comparing totals; normalized ones are for comparing proportions."
        },
        {
          id: "tabular13",
          question: "Why are radar charts (spider charts) often considered a bad choice for visualization?",
          type: "short-answer",
          answer: "The length of the spokes is an unaligned scale, making magnitude comparisons inaccurate. The area of the resulting polygon can be very misleading as it depends on the order of the axes. They are usually a bad choice unless the data is truly cyclic and the task is to compare the overall 'shape' of different items.",
          explanation: "A parallel coordinates plot or a set of bar charts is almost always a better alternative."
        },
        {
          id: "tabular14",
          question: "What are the two main user-driven solutions for mitigating challenges in a Parallel Coordinates Plot?",
          type: "short-answer",
          answer: "1. Interactively reordering the axes to see patterns between different attribute pairs. 2. Interactive filtering (brushing) on an axis to reduce clutter caused by too many line crossings.",
          explanation: "Interactivity is key to making PCPs usable for exploratory analysis."
        },
        {
          id: "tabular15",
          question: "What is a Scatterplot Matrix (SPLOM) and what is its primary purpose?",
          type: "short-answer",
          answer: "A Scatterplot Matrix (SPLOM) is a matrix of scatterplots that displays all pairwise combinations of attributes in a dataset. Its primary purpose is to allow for the exploration of correlations, trends, and relationships between many different pairs of attributes at once in a single overview.",
          explanation: "It is a powerful idiom for getting an overview of a multivariate tabular dataset."
        }
      ]
    }
  ];
  
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-8 h-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-800">Data Visualization Exam Practice</h1>
        </div>
        <p className="text-gray-600">
          Comprehensive practice questions covering all course readings and lectures. Use these to test your understanding of key concepts.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Total Questions: {readings.reduce((sum, r) => sum + r.questions.length, 0)}
        </p>
      </div>

      {readings.map((reading, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
          <button
            onClick={() => toggleSection(idx)}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-indigo-600">#{idx + 1}</span>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-gray-800">{reading.title}</h2>
                <p className="text-sm text-gray-500">{reading.questions.length} questions</p>
              </div>
            </div>
            {expandedSection === idx ? (
              <ChevronUp className="w-6 h-6 text-gray-400" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-400" />
            )}
          </button>

          {expandedSection === idx && (
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              {reading.questions.map((q, qIdx) => (
                <div key={q.id} className="bg-white rounded-lg p-6 mb-4 shadow-sm border border-gray-200">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Q{qIdx + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium mb-3" dangerouslySetInnerHTML={{ __html: q.question }}></p>
                      
                      {q.type === "multiple-choice" && (
                        <div className="space-y-2 mb-4">
                          {q.options.map((opt, i) => (
                            <div key={i} className="text-gray-700 pl-4">{opt}</div>
                          ))}
                        </div>
                      )}

                      {q.type === "multiple-select" && (
                        <div className="space-y-2 mb-4">
                          {q.options.map((opt, i) => (
                            <div key={i} className="text-gray-700 pl-4">{opt}</div>
                          ))}
                        </div>
                      )}

                      {q.type === "short-answer" && (
                        <div className="bg-blue-50 p-3 rounded mb-4 border-l-4 border-blue-400">
                          <p className="text-sm text-blue-800 font-medium">Short Answer Question</p>
                        </div>
                      )}

                      <button
                        onClick={() => toggleAnswer(q.id)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        {showAnswers[q.id] ? 'Hide Answer' : 'Show Answer'}
                      </button>

                      {showAnswers[q.id] && (
                        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                          <p className="font-semibold text-green-900 mb-2">Answer:</p>
                          <p className="text-green-800 mb-3" dangerouslySetInnerHTML={{ __html: q.answer }}></p>
                          {q.explanation && (
                            <>
                              <p className="font-semibold text-green-900 mb-2">Explanation:</p>
                              <p className="text-green-700 text-sm" dangerouslySetInnerHTML={{ __html: q.explanation }}></p>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="bg-white rounded-lg shadow-md p-6 mt-6 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">You've got this!</h3>
        <p className="text-gray-600">Good luck with your final hours of preparation.</p>
      </div>
    </div>
  );
};

export default ExamQuestions;
