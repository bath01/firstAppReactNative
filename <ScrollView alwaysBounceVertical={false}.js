<ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) => (
            <View style={styles.goalsItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>