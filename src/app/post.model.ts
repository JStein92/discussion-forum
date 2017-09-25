let globalId : number = 0;
export class Post {
  constructor(
    public title: string,
    public content: string
  ){}
  public points : number = 0;
  public id : number = globalId++;
  datePosted = new Date(Date.now());

  timePosted = (this.datePosted.getMonth() + "/" + this.datePosted.getDate() + "/" + this.datePosted.getFullYear() + " " + this.datePosted.getUTCHours() + ":" + this.datePosted.getMinutes());

}
