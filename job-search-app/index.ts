// A function that searches for jobs
// A function that runs our app
// the command to start everything
import type { SearchResponse, Job, SearchParams } from './types';

const searchJobs = async (params: SearchParams): Promise<void> => {
    try {
      const keyword = `${params.profession || ''} ${params.city || ''}`.trim();
      if (keyword === '') { //If search keyword is empty
        console.log('Error: You need to provide a profession or city to search for');
        return;
      }
      const result = `https://jobsearch.api.jobtechdev.se/search?q=${keyword}&offset=0&limit=10`;
      const response = await fetch(result);
      const data = await response.json() as SearchResponse;

      if (!response.ok) {
        throw new Error(`API request failed  ${response.status}`);
      }
  
      console.log(`\nFound ${data.hits.length} jobs`);
      console.log("-".repeat(50));
      console.dir(data, { depth: null }); //Check whole responsee
      data.hits.forEach((job: Job, index: number) => {
        const pubDate = new Date(job.publication_date);
        //console.log("pubDate: ", pubDate);
  
        console.log(`${index + 1}. ${job.headline}`);
        console.log(`Company: ${job.employer.name}`);
        console.log(`Location: ${job.workplace_address.municipality}`);
        console.log(`Publication: ${pubDate.toISOString().split("T")[0]}`);
        console.log("-".repeat(50));
        console.dir(job, { depth: 2 }); //loggging the whole objekt
      });
    } catch (error) {
        console.error('Error searching for jobs:', error);
      }
  };
  
  const runApp = (): void => {
    try {
      console.log("Welcome to the Job Search App!");
      console.log("This app searches for jobs using JobTeach API");
      const keyword = "Helsingborg";
      searchJobs({ profession: "Developer", city: "Malmö" });
    } catch (error) {
      console.error(error);
    }
  };
  
  runApp();