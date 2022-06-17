package com.example.workout_motivation_android.presentation

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import com.example.workout_motivation_android.presentation.theme.WorkoutmotivationandroidTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            WorkoutmotivationandroidTheme {

            }
        }
    }
}

