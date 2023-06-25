import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';

import { PieChart } from 'react-native-chart-kit';

import tw from '@/config/twrnc';

const width = Dimensions.get('screen').width;

const data = [
  {
    name: 'Футбольное поле',
    population: 50000,
    color: '#029222',
    legendFontColor: '#FFFFFF',
    legendFontSize: 10,
  },
  {
    name: 'Еда',
    population: 25000,
    color: '#D0FD3E',
    legendFontColor: '#FFFFFF',
    legendFontSize: 10,
  },
  {
    name: 'Призовой фонд',
    population: 10000,
    color: '#FAE20B',
    legendFontColor: '#FFFFFF',
    legendFontSize: 10,
  },
];

export const ReportScreen = () => {
  return (
    <View style={tw`flex-1 bg-black w-full`}>
      <ScrollView contentContainerStyle={tw`p-4 gap-4`}>
        <View style={tw``}>
          <PieChart
            data={data}
            width={width - 40}
            height={200}
            paddingLeft="0"
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 2,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            accessor="population"
            backgroundColor="transparent"
            center={[0, 0]}
            absolute
          />
        </View>
        <View>
          <Text style={tw`text-white text-xl font-bold`}>Цена участника:</Text>
          <Text style={tw`text-white/80`}>Редактируйте и согласовывайте список гостей!</Text>
        </View>
        <View>
          <Text style={tw`text-white text-xl font-bold`}>Общий бюджет:</Text>
          <Text style={tw`text-white/80`}>Редактируйте и согласовывайте список гостей!</Text>
        </View>

        <View>
          <Text style={tw`text-white text-xl font-bold`}>Футбольное поле</Text>
          <Text style={tw`text-white/80`}>
            Просторное и качественное футбольное поле. Оно обеспечит участникам комфортные условия
            для игры и максимальную безопасность. Поле отличается ровной поверхностью и правильными
            размерами, что позволит каждой команде проявить свой футбольный потенциал. Мы также
            обеспечим наличие судей и необходимого оборудования для проведения игры.
          </Text>
        </View>

        <View>
          <Text style={tw`text-white text-xl font-bold`}>Еда</Text>
          <Text style={tw`text-white/80`}>
            Мы понимаем, что футбол - это активный спорт, требующий энергии и восстановления сил.
            Поэтому мы предусмотрели возможность питания для всех участников и гостей мероприятия.
            Во время перерывов между матчами вы сможете насладиться разнообразными закусками,
            прохладительными напитками и освежающими фруктами. Мы также предложим вам возможность
            пообедать или перекусить в нашем специально организованном кафе, где будут доступны
            различные варианты питания, отвечающие разнообразным предпочтениям и диетическим
            потребностям.
          </Text>
        </View>

        <View>
          <Text style={tw`text-white text-xl font-bold`}>Призовой фонд</Text>
          <Text style={tw`text-white/80`}>
            Для дополнительной мотивации у команд есть возможность выиграть денежный приз в
            дополнение к ярким эмоциям от игры.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
