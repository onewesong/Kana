'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// 首先定义一些类型
type CharacterRow = string[];

interface CharacterMap {
  vowels: CharacterRow;
  k: CharacterRow;
  s: CharacterRow;
  t: CharacterRow;
  n: CharacterRow;
  h: CharacterRow;
  m: CharacterRow;
  y: CharacterRow;
  r: CharacterRow;
  w: CharacterRow;
  n_single: CharacterRow;
}

type ColorSchemes = {
  [K in keyof CharacterMap]: string;
};

const HiraganaChart = () => {

  const hiragana: CharacterMap = {
    vowels: ['あ', 'い', 'う', 'え', 'お'],
    k: ['か', 'き', 'く', 'け', 'こ'],
    s: ['さ', 'し', 'す', 'せ', 'そ'],
    t: ['た', 'ち', 'つ', 'て', 'と'],
    n: ['な', 'に', 'ぬ', 'ね', 'の'],
    h: ['は', 'ひ', 'ふ', 'へ', 'ほ'],
    m: ['ま', 'み', 'む', 'め', 'も'],
    y: ['や', 'い', 'ゆ', 'え', 'よ'],
    r: ['ら', 'り', 'る', 'れ', 'ろ'],
    w: ['わ', 'い', 'う', 'え', 'を'],
    n_single: ['ん', '', '', '', '']
  };

  const katakana: CharacterMap = {
    vowels: ['ア', 'イ', 'ウ', 'エ', 'オ'],
    k: ['カ', 'キ', 'ク', 'ケ', 'コ'],
    s: ['サ', 'シ', 'ス', 'セ', 'ソ'],
    t: ['タ', 'チ', 'ツ', 'テ', 'ト'],
    n: ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ'],
    h: ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ'],
    m: ['マ', 'ミ', 'ム', 'メ', 'モ'],
    y: ['ヤ', 'イ', 'ユ', 'エ', 'ヨ'],
    r: ['ラ', 'リ', 'ル', 'レ', 'ロ'],
    w: ['ワ', 'イ', 'ウ', 'エ', 'ヲ'],
    n_single: ['ン', '', '', '', '']
  };

  const romanji: CharacterMap = {
    vowels: ['a', 'i', 'u', 'e', 'o'],
    k: ['ka', 'ki', 'ku', 'ke', 'ko'],
    s: ['sa', 'shi', 'su', 'se', 'so'],
    t: ['ta', 'chi', 'tsu', 'te', 'to'],
    n: ['na', 'ni', 'nu', 'ne', 'no'],
    h: ['ha', 'hi', 'fu', 'he', 'ho'],
    m: ['ma', 'mi', 'mu', 'me', 'mo'],
    y: ['ya', 'i', 'yu', 'e', 'yo'],
    r: ['ra', 'ri', 'ru', 're', 'ro'],
    w: ['wa', 'i', 'u', 'e', 'wo'],
    n_single: ['n', '', '', '', '']
  };

  // 颜色主题方案
  const colorSchemes: ColorSchemes = {
    vowels: 'bg-red-100 hover:bg-red-200',
    k: 'bg-orange-100 hover:bg-orange-200',
    s: 'bg-yellow-100 hover:bg-yellow-200',
    t: 'bg-lime-100 hover:bg-lime-200',
    n: 'bg-green-100 hover:bg-green-200',
    h: 'bg-teal-100 hover:bg-teal-200',
    m: 'bg-cyan-100 hover:bg-cyan-200',
    y: 'bg-blue-100 hover:bg-blue-200',
    r: 'bg-indigo-100 hover:bg-indigo-200',
    w: 'bg-violet-100 hover:bg-violet-200',
    n_single: 'bg-purple-100 hover:bg-purple-200'
  };

  // 添加播放音频的函数
  const playSound = (char: string) => {
    if (!char || typeof window === 'undefined') return;
    
    const utterance = new SpeechSynthesisUtterance(char);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.8; // 语速稍微放慢一点
    utterance.volume = 1.5;
    
    window.speechSynthesis.speak(utterance);
  };

  const renderTable = (characters: CharacterMap, showRomanji = false) => {
    return (
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full border-collapse bg-white shadow-sm text-[3.5vw] sm:text-base">
          <thead>
            <tr>
              <th className="p-0.5 sm:p-1 border border-gray-200 bg-gray-50 w-6 sm:w-8"></th>
              {romanji.vowels.map((vowel, index) => (
                <th key={index} className="p-0.5 sm:p-1 border border-gray-200 bg-pink-50 w-12 sm:w-14 text-center font-medium">
                  {vowel}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(characters).map(([row, chars]) => (
              <tr key={row}>
                <td className="p-0.5 sm:p-1 border border-gray-200 text-center text-sm font-medium bg-gray-50 w-6 sm:w-8">
                  {row === 'vowels' ? '' : 
                   row === 'n_single' ? 'n' : row}
                </td>
                {chars.map((char: string, i: number) => (
                  <td 
                    key={i} 
                    className={`p-0.5 sm:p-1 border border-gray-200 text-center w-12 sm:w-14 transition-colors duration-300 
                      ${colorSchemes[row as keyof CharacterMap]}
                      ${char ? 'cursor-pointer active:scale-95' : ''}`}
                    onClick={() => char && playSound(char)}
                  >
                    {char && (
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-base sm:text-lg font-medium mb-0.5 select-none">
                          {char}
                        </div>
                        {showRomanji && (
                          <div className="text-[2.5vw] sm:text-xs text-gray-600 select-none">
                            {romanji[row as keyof CharacterMap][i]}
                          </div>
                        )}
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <Card className="w-screen sm:w-full max-w-none sm:max-w-3xl bg-gradient-to-br from-pink-50 to-purple-50">
      <CardHeader className="pb-1 sm:pb-2">
        <CardTitle className="text-lg sm:text-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          日本語五十音図
        </CardTitle>
      </CardHeader>
      <CardContent className="p-1 sm:p-6">
        <Tabs defaultValue="hiragana" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-2 sm:mb-4 bg-gradient-to-r from-pink-100 to-purple-100">
            <TabsTrigger value="hiragana" className="data-[state=active]:bg-white text-sm sm:text-base">平仮名</TabsTrigger>
            <TabsTrigger value="katakana" className="data-[state=active]:bg-white text-sm sm:text-base">片仮名</TabsTrigger>
          </TabsList>
          <TabsContent value="hiragana">
            {renderTable(hiragana, true)}
          </TabsContent>
          <TabsContent value="katakana">
            {renderTable(katakana, true)}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default HiraganaChart;
