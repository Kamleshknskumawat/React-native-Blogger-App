import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Badge } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, useWindowDimensions } from "react-native";
import HTML from "react-native-render-html";
export default function PostBodyWithoutBody(props) {
    const contentWidth = useWindowDimensions().width;
    const htmlContent = `
    <div dir=\"ltr\" style=\"text-align: left;\" trbidi=\"on\">\n<div class=\"MsoNormal\">\n<b><span style=\"font-size: large;\">Top 10 Black hat Hacker in the world</span></b><br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"https://2.bp.blogspot.com/-x97AEkSWs7A/WD1Oap7a9ZI/AAAAAAAABIg/mJ3YwF89ZNY9WAeqaM56Y0DbM-6xyFcmgCPcB/s1600/info.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"194\" src=\"https://2.bp.blogspot.com/-x97AEkSWs7A/WD1Oap7a9ZI/AAAAAAAABIg/mJ3YwF89ZNY9WAeqaM56Y0DbM-6xyFcmgCPcB/s320/info.jpg\" width=\"320\" /></a></div>\n<b><span style=\"font-size: large;\"><br /></span></b></div>\n<div class=\"MsoNormal\">\n<b><span style=\"font-size: large;\"><br /></span></b></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">A “black hat” hacker is a\nhacker who violates computer security for little reason beyond maliciousness or\nfor personal gain. Black hat hackers form the stereotypical, illegal hacking\ngroups often portrayed in popular culture, and are the epitome of all that the\npublic fears in a computer criminal. Black hat hackers break into secure\nnetworks to destroy data or make the network unusable for those who are\nauthorized to use the network. A black-hat is a term in computing for someone\nwho compromises the security of a system without permission from an authorized\nparty, usually with the intent of accessing computers connected to the network.\nTo accompany the technological advancements of the computer world and the\nconstant changing definition of a hacker, we thought it was time to look back\nat ten of the most notorious black hat hackers and the legendary hacks that\nearned them such a title.</span><o:p></o:p></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\"><br /></span></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">10. Vladimir Levin<o:p></o:p></span></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">Vladimir Levin is a\nRussian-born Jewish individual famed for his involvement in the attempt to\nfraudulently transfer US$10.7 million via Citibank’s computers. However, his\ncareer as a hacker was only short lived, with a capture, imprisonment and\nrecovery of all but $400,000 of the original $10 million. During Levin’s 1997\ntrial in the United States, he was said to have coordinated the first ever\ninternet bank raid. The truth is Levin’s ability to transfer Citibank client\nfunds to his own accounts was possible through stolen account numbers and PINs.\nLevin’s scam was a simple interception of clients’ calls while recording the\npunched in account numbers.</span><o:p></o:p></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\"><br /></span></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">9. Albert Gonzalez<o:p></o:p></span></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">Albert Gonzalez is a\ncomputer hacker and computer criminal who is accused of masterminding the\ncombined credit card theft and subsequent reselling of more than 170 million\ncard and ATM numbers from 2005 through 2007—the biggest such fraud in history.\nGonzalez’s team used SQL injection techniques to create malware backdoors on\nseveral corporate systems in order to launch packet-sniffing (specifically, ARP\nSpoofing) attacks, allowing him to steal computer data from internal corporate\nnetworks. When he was arrested, authorities seized $1.6 million in cash\nincluding $1.1 million found in plastic bags placed in a three-foot drum which\nhad been buried in his parents’ backyard. On March 25, 2010, Gonzalez was\nsentenced to 20 years in federal prison.</span><o:p></o:p></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\"><br /></span></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">8. &nbsp;Kevin Poulsen<o:p></o:p></span></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">The notorious ’80s black\nhat hacker, Kevin Poulsen, also known as Dark Dante, gained recognition for his\nhack of LA radio’s KIIS-FM phone lines, which earned him a brand new Porsche,\namong other items. Law enforcement dubbed him “the Hannibal Lecter of computer\ncrime.”</span><span style=\"font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\"><br />\n<span style=\"background: white;\">Authorities began to pursue Poulsen after he\nhacked into a federal investigation database. During this pursuit, he further\ndrew the ire of the FBI by hacking into federal computers for wiretap\ninformation. His hacking specialty, however, revolved around telephones.\nPoulsen’s most famous hack, KIIS-FM, was accomplished by taking over all of the\nstation’s phone lines. In a related feat, Poulsen also “reactivated old Yellow\nPage escort telephone numbers for an acquaintance who then ran a virtual escort\nagency.” Later, when his photo came up on the show Unsolved Mysteries, 1-800\nphone lines for the program crashed. Ultimately, Poulsen was captured in a\nsupermarket and served a sentence of five years, which was the longest sentence\never given for hacking at the time. However, since serving time, Poulsen has\nworked as a journalist and is now a senior editor for Wired News. Poulsen’s\nmost note-worthy article details his work on identifying 744 sex offenders with\nMySpace profiles.<o:p></o:p></span></span></div>\n<div class=\"MsoNormal\">\n<br /></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">7. Robert Tappan Marris<o:p></o:p></span></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">Robert Tappan Morris is an\nAmerican computer scientist, best known for creating the Morris Worm in 1988.\nThat was considered the first computer worm on the Internet. Also he was the\nfirst person convicted under the Computer Fraud and Abuse Act.</span><span style=\"font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\"><br />\n<span style=\"background: white;\">Morris created the worm while he was a graduate\nstudent at Cornell University. He released the worm from MIT to conceal the\nfact that it actually originated from Cornell. The worm took down one-tenth of\nthe Internet, crippling 6,000 plus computer systems. It didn’t take long for\nthe police to track him down. Due in part to the need for social acceptance\nthat seems to be common among many young hackers, Morris made the fault of\nchatting about his worm for months before its release on the Internet. Morris\nclaimed it was just a stunt, and added that he truly regretted causing $15\nmillion worth of damage: the estimated amount of carnage his worm left behind.</span><br />\n<span style=\"background: white;\">Morris was one of the first to be tried and\nconvicted under the Computer Fraud and Abuse Act . In December, 1990, was\nsentenced to three years of probation, 400 hours of community service, a fine\nof $10,050, and the costs of his supervision.<o:p></o:p></span></span></div>\n<div class=\"MsoNormal\">\n<span style=\"font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\"><span style=\"background: white;\"><br /></span></span></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">6. Michael calce<o:p></o:p></span></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">A high school student from\nWest Island, Michael Demon Calce best known as “MafiaBoy”. He launched a series\nof widely known denial-of-service attacks against large commercial websites,\nincluding Yahoo!, Amazon.com, Dell, eBay, and CNN. He hacked Yahoo! when it was\nstill the web’s leading search engine and caused it to shutdown for about an\nhour. Like many hackers, Calce exploited websites primarily for pride and\nestablishing dominance for himself and his cybergroup, TNT. In 2001, the\nMontreal Youth Court sentenced Calce to eight months of open custody, one year\nof probation, restricted use of the Internet, and a minimal fine.</span><o:p></o:p></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\"><br /></span></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">5. Kevin Mitnick<o:p></o:p></span></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">A self-proclaimed “hacker\nposter boy,” Mitnick went through a highly publicized pursuit by authorities.\nHis mischief was hyped by the media but his actual offenses may be less notable\nthan his notoriety suggests. The Department of Justice describes him as “the\nmost wanted computer criminal in United States history.” His exploits were detailed\nin two movies: Freedom Downtime and Takedown.</span><span style=\"font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\"><br />\n<span style=\"background: white;\">Mitnick gained unauthorized access to his first\ncomputer network in 1979, at 16, when a friend gave him the phone number for\nthe Ark, the computer system Digital Equipment Corporation (DEC) used for\ndeveloping their RSTS/E operating system software. He broke into DEC’s computer\nnetwork and copied their software, a crime he was charged with and convicted of\nin 1988. According to the U.S. Department of Justice, Mitnick gained\nunauthorized access to dozens of computer networks while he was a fugitive. He\nused cloned cellular phones to hide his location and, among other things,\ncopied valuable proprietary software from some of the country’s largest\ncellular telephone and computer companies. Mitnick also intercepted and stole\ncomputer passwords, altered computer networks, and broke into and read private\ne-mail.<o:p></o:p></span></span></div>\n<div class=\"MsoNormal\">\n<br /></div>\n<div class=\"MsoNormal\">\n<br /></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">4.George Hotz<o:p></o:p></span></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">George Francis Hotz, alias\ngeohot, or simply mil, is an American hacker known for unlocking the iPhone,\nallowing the phone to be used with other wireless carriers, contrary to\nAT&amp;T and Apple’s intent. Additionally, he developed the limera1n<span class=\"apple-converted-space\">&nbsp;</span></span><a href=\"http://en.wikipedia.org/wiki/IOS_Jailbreaking\" style=\"cursor: pointer;\" target=\"_blank\"><span style=\"background: white; border: 1pt solid; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%; padding: 0in;\">jailbreak tool</span></a><span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">, which used his limera1n bootrom exploit.</span><span style=\"font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\"><br />\n<span style=\"background: white;\">In June, 2007, Hotz became the first person to\ncarrier unlock an iPhone. According to Hotz’s blog, he traded his 2nd unlocked\n8 GB iPhone to Terry Daidone, the founder of Certicell, for a Nissan 350Z and\nthree 8 GB iPhones. Hotz said he wanted to give the iPhones to the other\nmembers of the team who created the hack with him. His name will forever be\nassociated with the April 2011 PlayStation breach. Being one of the first\nhackers ever to jailbreak the Sony PlayStation 3, Hotz found himself in the\nmidst of a very relentless, public and messy court battle with Sony – perhaps\nworsened by Hotz’s public release of his jail breaking methods. In a stated\nretaliation to Sony’s gap of the unstated rules of jail breaking – never\nprosecute – the hacker group Anonymous attacked Sony in what would be the dubbed\nas the most costly security break of all time to date.</span><br />\n<span style=\"background: white;\">At the end of April 2011, Hackers broke into the<span class=\"apple-converted-space\">&nbsp;</span></span></span><a href=\"http://en.wikipedia.org/wiki/PlayStation_3\" style=\"cursor: pointer;\" target=\"_blank\"><span style=\"background: white; border: 1pt solid; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%; padding: 0in;\">PlayStation</span></a><span class=\"apple-converted-space\"><span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">&nbsp;</span><span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">Network and stole personal information of some\n77 million users. However, Hotz denied any responsibility for the attack, and\nadded “Running homebrew and exploring security on your devices is cool; hacking\ninto someone else’s server and stealing databases of user info. is not cool.”</span><o:p></o:p></span></div>\n<div class=\"MsoNormal\">\n<br /></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">3. Adrian lamo<o:p></o:p></span></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">Adrian Lamo is a\nColombian-American threat analyst and hacker. He used coffee shops, libraries\nand internet cafés as his locations for hacking. Apart from being the homeless\nhacker, Lamo is widely-known for breaking into a series of high-profile\ncomputer networks, which include The New York Times, Microsoft, Yahoo!, and MCI\nWorldCom. In 2002, he added his name to the The New York Times’ internal\ndatabase of expert sources and utilized LexisNexis account to conduct research\non high-profile subjects.</span><span style=\"font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\"><br />\n<span style=\"background: white;\">For his intrusion at The New York Times, Lamo was\nordered to pay approximately $65,000 in damages and was sentenced to six months\nhouse arrest at his parents’ home, with an additional two years of probation.\nIn June 2010, Lamo disclosed the name of Bradley Manning to U.S. Army\nauthorities as the source of the July 12, 2007 Baghdad airstrike video leak to\nWikileaks. Lamo is presently working as a threat analyst and donates his time\nand skills to a Sacramento-based nonprofit organization.<o:p></o:p></span></span></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">2. Gary Mckinnon<o:p></o:p></span></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">In 2002, an exceptionally\nodd message appeared on a US Army computer screen: “Your security system is\ncrap,” it read. “I am Solo. I will continue to disrupt at the highest levels.”\nIt was later identified as the work of Scottish systems administrator, Gary\nMcKinnon, who was accused of perpetrating the “biggest military computer hack\nof all time”. He is accused of hacking into 97 United States military and NASA\ncomputers over a 13-month period between, using the name ‘Solo’.</span><span style=\"font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\"><br />\n<span style=\"background: white;\">The US authorities claim he deleted critical files\nfrom operating systems, which shut down the United States Army’s Military\nDistrict of Washington network of 2,000 computers for 24 hours. After the\nSeptember 11 attacks in 2001, he deleted weapons logs at the Earle Naval\nWeapons Station, rendering its network of 300 computers inoperable and paralyzing\nmunitions supply deliveries for the US Navy’s Atlantic Fleet. He is also\naccused of copying data, account files and passwords onto his own computer.</span><br />\n<span style=\"background: white;\">In November 2002, McKinnon was indicted by a\nfederal grand jury in the Eastern District of Virginia. The indictment\ncontained seven counts of computer-related crime, each of which carried a\npotential ten-year jail sentence. The court had recommended that McKinnon be\napprehended to the United States to face charges of illegally accessing 97\ncomputers, causing a total of $700,000 in damage. Even more interesting are\nMcKinnon’s motives for the large scale hackings, which he claims were in search\nof information on UFOs. He believed the US government was hiding such\ninformation in its military computers.<o:p></o:p></span></span></div>\n<div class=\"MsoNormal\">\n<span style=\"font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\"><span style=\"background: white;\"><br /></span></span></div>\n<div class=\"MsoNormal\">\n<span style=\"font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\"><span style=\"background: white;\"><br /></span></span></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">1.Jonathan James<o:p></o:p></span></div>\n<div class=\"MsoNormal\">\n<span style=\"background: white; font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\">16-year-old black hat\nhacker Jonathan James, became the first juvenile imprisoned for cybercrime.\nJames gained his notoriety by implementing a series of successful intrusions\ninto various systems. In an anonymous PBS interview, he professes, “I was just\nlooking around, playing around. What was fun for me was a challenge to see what\nI could pull off.”</span><span style=\"font-family: &quot;arial&quot; , sans-serif; font-size: 13.5pt; line-height: 115%;\"><br />\n<span style=\"background: white;\">James’ major intrusions targeted high-profile\norganizations such as NASA and the Department of Defense. He cracked into NASA\ncomputers, stealing software worth approximately $1.7 million. He also hacked\ninto the Defense Threat Reduction Agency and intercepted over 3,000 highly\nsecretive messages passing to and from the DTRA employees, while collecting\nmany usernames and passwords.</span><br />\n<span style=\"background: white;\">Also known as “c0mrade,” James committed suicide\nusing a gun, On May 18, 2008, at the age of 25. His suicide was apparently\nmotivated by the belief that he would be prosecuted for crimes he had not\ncommitted. “I honestly, honestly had nothing to do with TJX,” James wrote in\nhis suicide note, “I have no faith in the ‘justice’ system. Perhaps my actions\ntoday, and this letter, will send a stronger message to the public. Either way,\nI have lost control over this situation, and this is my only way to regain\ncontrol.”<o:p></o:p></span></span></div>\n<div class=\"MsoNormal\">\n<br /></div>\n<br />\n<div class=\"MsoNormal\">\n<br /></div>\n</div>\n
`;


    const navigation = useNavigation();
    function getPost(arg) {
        console.log("Hello world" + arg);
    }
    const tagSearch = (arg) => {
        console.log("tagSearch : " + arg);
    }
    const share = () => {
        console.log("Share");
    }
    onPresss = () => {
        console.log("onPress");
        var arg = "Title kamlesh"
        navigation.navigate('PostWithId', { screenName: "Title kamlesh" })
    }
    // const items = props.data.label.map(function (item) {
    //     return <li> {item} </li>;
    // });
    const getLabals = () => {
        if (props.data.labels) {
            return props.data.labels.map((number) => {
                return (<Badge style={{ margin: 5, padding: 5 }} onPress={tagSearch(number)} >
                    <Text >{number}</Text>
                </Badge>
                )
            }
            )
        }
    }


    // const listItems = () => {

    //     return props.labels.map((data) => {
    //         return (

    //             // <ScrollView style={{ flex: 1 }}>
    //             //   <HTML source={{ html: data }} contentWidth={contentWidth} />
    //             // </ScrollView>
    //             //  <View><Text>{data.title}</Text></View>
    //             // <PostBodyWithoutBody></PostBodyWithoutBody>
    //             <Text>{data}</Text>
    //         )
    //     })
    // return todos.map((data) => {
    //   <View><Text>{data.title}</Text></View>

    //   console.log(data.title);
    //   // <PostBodyWithoutBody></PostBodyWithoutBody>
    // });
    // }
    return (

        <Container>
            <Header />
            <Content>
                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{ uri: 'Image URL' }} />
                            <Body>
                                <Text>KamleshKnsKumawat</Text>
                                <Text note>{props.data.published}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>

                        <Body>
                            <CardItem  >
                                <TouchableOpacity
                                    onPress={onPresss}
                                >
                                    <Text onPress={() => navigation.navigate('PostWithId', { screenName: props.data.title, id: props.data.id })} >{props.data.title} </Text>

                                </TouchableOpacity>

                            </CardItem>
                            <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: 200, flex: 1 }} />

                            <ScrollView >
                               <HTML source={{ html: props.data.content !== undefined ? `~${props.data.content}` : props.data.title }} contentWidth={contentWidth} /> 
                            </ScrollView>
                          {/*   <Text note>{props.data.content !== undefined ? props.data.content : props.data.title}</Text> */}
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            {getLabals()}
                            {/* <Badge>
                                <Text onPress={tagSearch}>{getLabals()}</Text>
                            </Badge> */}
                        </Left>
                    </CardItem>

                    <CardItem>
                        <Left>
                            <Button transparent textStyle={{ color: '#87838B' }}>
                                <Icon name="logo-facebook" />

                            </Button>
                            <Button transparent textStyle={{ color: '#87838B' }}>
                                <Icon name="logo-instagram" />

                            </Button>
                            <Button transparent textStyle={{ color: '#87838B' }}>
                                <Icon name="logo-twitter" />

                            </Button>
                            <Button transparent textStyle={{ color: '#87838B' }}>
                                <Icon name="logo-whatsapp" />

                            </Button>
                            <Button transparent textStyle={{ color: '#87838B' }} onPress={share}>
                                <Icon name="logo-whatsapp" />

                            </Button>
                        </Left>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});