import React, { Component } from "react"
import NewsItem from './NewsItem';
import { Loading } from "./Loading";
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
    articles = [
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Emma Roth",
            "title": "Google’s partnering with Coinbase to let cloud customers pay in crypto next year",
            "description": "Starting in 2023, Google will partner with Coinbase to power crypto-based transactions for “select” customers in the Web3 space.",
            "url": "https://www.theverge.com/2022/10/11/23398306/google-coinbase-partnership-crypto-2023-cloud",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/a1UuqmTXeWu_sDyVAVipeGpIQ0s=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg",
            "publishedAt": "2022-10-11T14:29:54Z",
            "content": "Googles partnering with Coinbase to let cloud customers pay in crypto next year\r\nGoogles partnering with Coinbase to let cloud customers pay in crypto next year\r\n / The search giant will use Coinbase… [+1913 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Crypto firm 21Shares lists bitcoin ETP on Nasdaq Dubai - Reuters.com",
            "description": "Crypto investment products firm 21.co said on Wednesday its subsidiary 21Shares AG has listed a bitcoin exchange-traded product on Nasdaq Dubai, making it the Middle East's first physically-backed bitcoin ETP.",
            "url": "https://www.reuters.com/technology/crypto-firm-21shares-lists-bitcoin-etp-nasdaq-dubai-2022-10-12/",
            "urlToImage": "https://www.reuters.com/resizer/e-rtKXHJBMDr3n3yPuzMmaBrXaE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/62VXJFTHEZNRZM4CO6PTL5CS3A.jpg",
            "publishedAt": "2022-10-12T06:05:00Z",
            "content": "DUBAI, Oct 12 (Reuters) - Crypto investment products firm 21.co said on Wednesday its subsidiary 21Shares AG has listed a bitcoin exchange-traded product on Nasdaq Dubai, making it the Middle East's … [+1642 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Gian M. Volpicelli",
            "title": "The Great Crypto-Cop Brain Drain",
            "description": "Hunting down crypto criminals is a dying art as law enforcement officers jump in-house.",
            "url": "https://www.wired.com/story/the-great-crypto-cop-brain-drain/",
            "urlToImage": "https://media.wired.com/photos/636b01906776a0176c76e576/191:100/w_1280,c_limit/business-crypto-cop.jpg",
            "publishedAt": "2022-11-09T12:00:00Z",
            "content": "In the course of a decade as a special agent with the US Internal Revenue Service (IRS), Tigran Gambaryan has seen them all. \r\nFrom plundered crypto exchange Mt Gox, to dark-net marketplace Silk Road… [+3016 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Andy Greenberg",
            "title": "Celsius Exchange Data Dump Is a Gift to Crypto Sleuths—and Thieves",
            "description": "By releasing half a million users’ transactions in a bankruptcy court filing, the company has opened a vast breach in its users’ financial privacy.",
            "url": "https://www.wired.com/story/celsius-user-data-dump-crypto-tracing-scammers/",
            "urlToImage": "https://media.wired.com/photos/6347486008a267a4aad8c04d/191:100/w_1280,c_limit/Celsius-Exchange-Data-Dump-GettyImages-1272233098.jpg",
            "publishedAt": "2022-10-13T11:00:00Z",
            "content": "The paradoxical nature of cryptocurrency's privacy is that the blockchain, that unchangeable ledger of all a cryptocurrency's transactions, serves as both a map and a mask: Bitcoin are easy enough to… [+3212 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Cryptoverse: Bitcoin wants to break its bond with stocks - Reuters",
            "description": "After months of tears and tantrums, bitcoin wants to split up with stock markets.",
            "url": "https://www.reuters.com/technology/cryptoverse-bitcoin-wants-break-its-bond-with-stocks-2022-11-01/",
            "urlToImage": "https://www.reuters.com/resizer/bWNhsz1HaCN1pRR9s5PyHbHlF3Q=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Z34ISH2TFNO6DND4JK4XQAJ3LU.jpg",
            "publishedAt": "2022-11-01T06:16:29Z",
            "content": "Nov 1 (Reuters) - After months of tears and tantrums, bitcoin wants to split up with stock markets.\r\nThe cryptocurrency, which has been closely correlated with tech stocks for much of its torrid 2022… [+4079 chars]"
        },
    ]
    constructor() {
        super()
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults : 0
        }

    }
    async updateNews() {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=${this.props.country}&apiKey=02ef214be6044eb8a41e995548ec11b9&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ loading: false })
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }
    async componentDidMount() {
        this.updateNews();


    }


    handlePrevClick = async () => {
        console.log("prev")

        this.setState({ page: this.state.page - 1 });
        this.updateNews();


    }
    handleNextClick = async () => {
        console.log("Next");

        this.setState({ page: this.state.page + 1 });
        this.updateNews();


    }
    fetchData = async  ()=> {
        this.setState({ page: this.state.page + 1 });
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=${this.props.country}&apiKey=02ef214be6044eb8a41e995548ec11b9&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ loading: false })
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults })
    }
    render() {
        return (
            <div className="container my-3">

                {/* <h1 className=" mb-3 text-center py-3 news-title">PandaNews - Top News headlines</h1> */}
                
                {/* {this.state.loading && <Loading/>} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loading/>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    > <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <>  {element.urlToImage && <div className="col-md-3 mb-3" key={element.url}>
                                     <NewsItem url={element.url ? element.url : ""} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} author={element.author ? element.author : "Unknown"} date={element.publishedAt ? element.publishedAt : ""} />
                                    </div>}
                                 </>
                            })}

           
                        </div>
                        </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>  Next  &rarr;</button>
                </div> */}


            </div>
        )
    }
}
export default News